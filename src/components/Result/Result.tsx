import * as React from 'react';

import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';
import { cx } from 'emotion';

import { selectPokemon, toggleMobileResultView } from 'actions';
import { TeamPokemon, TeamPokemonBaseProps } from 'components/TeamPokemon';
import { DeadPokemon } from 'components/DeadPokemon';
import { BoxedPokemon } from 'components/BoxedPokemon';
import { ChampsPokemon } from 'components/ChampsPokemon';
import { TrainerResult } from 'components/Result';
import { TopBar } from 'components/TopBar';
import { ErrorBoundary } from 'components/Shared';
import { Stats } from './Stats';
import { Pokemon, Trainer, Editor, Box } from 'models';
import { reducers } from 'reducers';
import { Styles as StyleState, getGameRegion, sortPokes, getContrastColor, isLocal } from 'utils';

import * as Styles from './styles';

import './Result.css';
import './themes.css';
import 'assets/pokemon-font.css';
import { State } from 'state';
import isMobile from 'is-mobile';
import { Button, Classes } from '@blueprintjs/core';
import { editor } from 'reducers/editor';

async function load() {
    const resource = await import('@emmaramirez/dom-to-image');
    return resource.domToImage;
}

interface ResultProps {
    pokemon: Pokemon[];
    game: any;
    trainer: Trainer;
    box: State['box'];
    editor: Editor;
    selectPokemon: selectPokemon;
    toggleMobileResultView: typeof toggleMobileResultView;
    style: State['style'];
    rules: string[];
}

interface ResultState {
    isDownloading: boolean;
    downloadError: string | null;
}

const getNumberOf = (status?: string, pokemon?: Pokemon[]) =>
    status
        ? pokemon
              ?.filter((v) => v.hasOwnProperty('id'))
              .filter((poke) => poke.status === status && !poke.hidden).length
        : 0;

export function BackspriteMontage({pokemon}: {pokemon: Pokemon[]}) {
    return <div className='backsprite-montage' style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'bottom',
        margin: '0 auto',
        height: '92px',
    }}>
        {pokemon.map((poke, idx) => {
            return <img style={{height: '128px', marginLeft: '-32px', zIndex: 6 - idx, imageRendering: 'pixelated' }} alt='' role='presentation' src={`https://img.pokemondb.net/sprites/firered-leafgreen/back-normal/${(poke.species || '').toLowerCase()}.png`} />;
        })}
    </div>;
}

export class ResultBase extends React.PureComponent<ResultProps, ResultState> {
    public resultRef: React.RefObject<HTMLDivElement>;
    public constructor(props: ResultProps) {
        super(props);
        this.resultRef = React.createRef();
        this.state = {
            isDownloading: false,
            downloadError: null,
        };
    }

    private renderTeamPokemon() {
        return this.props.pokemon
            .filter((v) => v.hasOwnProperty('id'))
            .filter((poke) => poke.status === 'Team')
            .filter((poke) => !poke.hidden)
            .sort(sortPokes)
            .map((poke, index) => {
                return <TeamPokemon key={index} pokemon={poke} />;
            });
    }

    private renderErrors() {
        const renderItems: React.ReactNode[] = [];
        if (this.props.pokemon.filter((poke) => poke.status === 'Team').length > 6) {
            renderItems.push(
                <div key={uuid()} className="pt-callout pt-intent-danger">
                    You have more than 6 Pokémon in your party.
                </div>,
            );
        }
        if (this.state.downloadError) {
            renderItems.push(
                <div key={uuid()} className="pt-callout pt-intent-danger">
                    Image failed to download. Check that you are not using images that link to
                    external sites.
                </div>,
            );
        }
        return <>{renderItems}</>;
    }

    private getPokemonByStatus(status) {
        return this.props.pokemon
            .filter((v) => v.hasOwnProperty('id'))
            .filter((poke) => poke.status === status)
            .filter((poke) => !poke.hidden);
    }

    private renderChampsPokemon(pokemon) {
        return pokemon.map((poke, index) => {
            return (
                <ChampsPokemon
                    useSprites={this.props.style.useSpritesForChampsPokemon}
                    key={index}
                    {...poke}
                />
            );
        });
    }

    private renderDeadPokemon() {
        return this.props.pokemon
            .filter((v) => v.hasOwnProperty('id'))
            .filter((poke) => poke.status === 'Dead')
            .filter((poke) => !poke.hidden)
            .map((poke, index) => {
                return <DeadPokemon minimal={false} key={index} {...poke} />;
            });
    }

    private getCorrectStatusWrapper(pokes: Pokemon[], box, paddingForVerticalTrainerSection) {
        return this.renderContainer(pokes, paddingForVerticalTrainerSection, box);
    }

    private renderOtherPokemonStatuses(paddingForVerticalTrainerSection) {
        return this.props.box
            .filter((box) => !['Team', 'Boxed', 'Dead', 'Champs'].includes(box.name))
            .map((box) => {
                const pokes = this.props.pokemon
                    .filter((v) => v.hasOwnProperty('id'))
                    .filter((poke) => poke.status === box.name)
                    .filter((poke) => !poke.hidden);
                return this.getCorrectStatusWrapper(pokes, box, paddingForVerticalTrainerSection);
            });
    }

    private async toImage() {
        const resultNode = this.resultRef.current;
        this.setState({ isDownloading: true });
        if (process.env.NODE_ENV === 'test') {
            return;
        }
        try {
            const timeout = setTimeout(() => {
                throw new Error('Timed out');
            }, 10000);
            const domToImage = await load();
            const dataUrl = await (domToImage as any).toPng(resultNode, { corsImage: true });
            const link = document.createElement('a');
            link.download = `nuzlocke-${uuid()}.png`;
            link.href = dataUrl;
            link.click();
            this.setState({ downloadError: null, isDownloading: false });
            clearTimeout(timeout);
        } catch (e) {
            this.setState({
                downloadError:
                    'Failed to download. This is likely due to your image containing an image resource that does not allow Cross-Origin',
                isDownloading: false,
            });
        }
    }

    private getBoxClass = (s) => {
        if (s === 'Dead') return 'dead';
        if (s === 'Boxed') return 'boxed';
        if (s === 'Champs') return 'champs';
        if (s === 'Team') return 'team';
        return 'boxed';
    };

    private getBoxStyle = (s) => {
        if (s === 'Champs')
            return {
                margin: this.props.style.template === 'Compact' ? 0 : '.5rem',
            };
        if (s === 'Dead')
            return {
                display: 'flex',
                flexWrap: 'wrap' as React.CSSProperties['flexWrap'],
                justifyContent: 'center',
                margin: this.props.style.template === 'Compact' ? 0 : '.5rem',
            };

        return {};
    };

    private getH3 = (box, n) => {
        if (box.name === 'Dead' || box.name === 'Champs') {
            if (n) {
                return ` (${n})`;
            }
        }
        return null;
    };

    private renderContainer = (
        pokemon: Pokemon[],
        paddingForVerticalTrainerSection: any,
        box?: Box,
    ) =>
        box && pokemon && getNumberOf(box?.name, pokemon)! > 0 ? (
            <div
                style={paddingForVerticalTrainerSection}
                className={`${this.getBoxClass(box?.inheritFrom || box.name)}-container`}>
                {box?.name !== 'Team' && (
                    <h3 style={{ color: getContrastColor(this.props.style.bgColor || '#383840') }}>
                        {box?.name}
                        {this.getH3(box, getNumberOf(box?.name, pokemon))}
                    </h3>
                )}
                <div
                    className="boxed-container-inner"
                    style={this.getBoxStyle(box?.name || box?.inheritFrom)}>
                    {pokemon.map((poke, index) => {
                        if (box?.name === 'Boxed' || box?.inheritFrom === 'Boxed')
                            return <BoxedPokemon key={index} {...poke} />;
                        if (box?.name === 'Dead' || box?.inheritFrom === 'Dead')
                            return <DeadPokemon minimal={false} key={index} {...poke} />;
                        if (box?.name === 'Champs' || box?.inheritFrom === 'Champs')
                            return (
                                <ChampsPokemon
                                    useSprites={this.props.style.useSpritesForChampsPokemon}
                                    key={index}
                                    {...poke}
                                />
                            );
                        if (box?.name === 'Team' || box?.inheritFrom === 'Team')
                            return <TeamPokemon key={index} pokemon={poke} />;
                        return null;
                    })}
                </div>
            </div>
        ) : null;

    private getScale(style, editor) {
        const rw = parseInt(style.resultWidth.toString());
        const ww = window.innerWidth;
        const scale = ww / rw / 1.1;
        if (!editor.showResultInMobile) {
            return {};
        }
        if (!Number.isNaN(rw)) {
            return { transform: `scale(${scale.toFixed(2)})` };
        } else {
            return { transform: 'scale(0.3)' };
        }
    }

    public render() {
        const { style, box, trainer, pokemon, editor } = this.props;
        const numberOfTeam = getNumberOf('Team', pokemon);
        const numberOfDead = getNumberOf('Dead', pokemon);
        const numberOfBoxed = getNumberOf('Boxed', pokemon);
        const numberOfChamps = getNumberOf('Champs', pokemon);
        const bgColor = style ? style.bgColor : '#383840';
        const topHeaderColor = style ? style.topHeaderColor : '#333333';
        const accentColor = style ? style.accentColor : '#111111';
        const trainerSectionOrientation = this.props.style.trainerSectionOrientation;
        const paddingForVerticalTrainerSection =
            trainerSectionOrientation === 'vertical'
                ? {
                    paddingLeft: style.trainerWidth,
                }
                : {};
        const teamContainer = (
            <div style={paddingForVerticalTrainerSection} className="team-container">
                {this.renderTeamPokemon()}
            </div>
        );

        const rulesContainer = (
            <div className="rules-container">
                <h3 style={{ color: getContrastColor(bgColor) }}>Rules</h3>
                <ol style={{ color: getContrastColor(bgColor) }}>
                    {this.props.rules.map((rule, index) => {
                        return <li key={index}>{rule}</li>;
                    })}
                </ol>
            </div>
        );
        const others = pokemon.filter(
            (poke) => !['Team', 'Boxed', 'Dead', 'Champs'].includes(poke.status!),
        );
        const enableStats = style.displayStats;
        const enableChampImage = isLocal();
        const enableBackSpriteMontage = isLocal();

        return (
            <div className="hide-scrollbars" style={{ width: '100%', overflowY: 'scroll' }}>
                {isMobile() && editor.showResultInMobile && (
                    <div className={Classes.OVERLAY_BACKDROP}></div>
                )}
                <ErrorBoundary>
                    <TopBar
                        isDownloading={this.state.isDownloading}
                        onClickDownload={() => this.toImage()}>
                        {this.renderErrors()}
                    </TopBar>
                    <style>{style.customCSS}</style>
                    {isMobile() && editor.showResultInMobile && (
                        <Button
                            className={Styles.result_download}
                            icon="download"
                            onClick={() => {
                                this.props.toggleMobileResultView();
                                this.toImage();
                            }}>
                            Download
                        </Button>
                    )}
                    <div
                        ref={this.resultRef}
                        className={`result container ${
                            (style.template && style.template.toLowerCase().replace(/\s/g, '-')) ||
                            ''
                        } region-${getGameRegion(
                            this.props.game.name,
                        )} team-size-${numberOfTeam} ${trainerSectionOrientation}-trainer
                       ${editor.showResultInMobile ? Styles.result_mobile : ''}
                    `}
                        style={{
                            fontFamily: style.usePokemonGBAFont ? 'pokemon_font' : 'inherit',
                            fontSize: style.usePokemonGBAFont ? '125%' : '100%',
                            margin: this.state.isDownloading ? '0' : '3rem auto',
                            backgroundColor: bgColor,
                            backgroundImage: `url(${style.backgroundImage})`,
                            backgroundRepeat: style.tileBackground ? 'repeat' : 'no-repeat',
                            border: 'none',
                            height: style.useAutoHeight ? 'auto' : `${style.resultHeight}px`,
                            marginBottom: '.5rem',
                            // transform: `scale(${style.zoomLevel})`,
                            // transformOrigin: '0 0',
                            width: `${style.resultWidth}px`,
                            ...this.getScale(style, editor),
                        }}>
                        <div
                            className="trainer-container"
                            style={
                                trainerSectionOrientation === 'vertical'
                                    ? {
                                        backgroundColor: topHeaderColor,
                                        color: getContrastColor(topHeaderColor),
                                        width: style.trainerWidth,
                                        position: 'absolute',
                                        height: `calc(${style.trainerHeight} + 2%)`,
                                        display: 'flex',
                                    }
                                    : {
                                        backgroundColor: topHeaderColor,
                                        color: getContrastColor(topHeaderColor),
                                        width: style.trainerAuto ? '100%' : style.trainerWidth,
                                        height: style.trainerAuto ? 'auto' : style.trainerHeight,
                                    }
                            }>
                            <TrainerResult orientation={trainerSectionOrientation} />
                        </div>
                        {trainer && trainer.notes ? (
                            <div
                                style={{ color: getContrastColor(bgColor) }}
                                className="result-notes">
                                {trainer.notes}
                            </div>
                        ) : null}
                        {enableChampImage && (
                            <img
                                src="./img/dev/champs3.jpg"
                                alt="fads"
                                style={{ width: '500px', display: 'block', margin: '0 auto' }}
                            />
                        )}
                        {style.displayRules && style.displayRulesLocation === 'top'
                            ? rulesContainer
                            : null}
                        {teamContainer}
                        {style.template === 'Generations' &&
                        trainerSectionOrientation === 'vertical' ? (
                                <div className="statuses-wrapper">
                                    {this.renderContainer(
                                        this.getPokemonByStatus('Boxed'),
                                        paddingForVerticalTrainerSection,
                                    box?.[1],
                                    )}
                                    {this.renderContainer(
                                        this.getPokemonByStatus('Dead'),
                                        paddingForVerticalTrainerSection,
                                    box?.[2],
                                    )}
                                    {this.renderContainer(
                                        this.getPokemonByStatus('Champs'),
                                        paddingForVerticalTrainerSection,
                                    box?.[3],
                                    )}
                                    {this.renderOtherPokemonStatuses(paddingForVerticalTrainerSection)}
                                </div>
                            ) : (
                                <>
                                    {this.renderContainer(
                                        this.getPokemonByStatus('Boxed'),
                                        paddingForVerticalTrainerSection,
                                    box?.[1],
                                    )}
                                    {this.renderContainer(
                                        this.getPokemonByStatus('Dead'),
                                        paddingForVerticalTrainerSection,
                                    box?.[2],
                                    )}
                                    {this.renderContainer(
                                        this.getPokemonByStatus('Champs'),
                                        paddingForVerticalTrainerSection,
                                    box?.[3],
                                    )}
                                    {this.renderOtherPokemonStatuses(paddingForVerticalTrainerSection)}
                                </>
                            )}

                        <div
                            style={{
                                ...paddingForVerticalTrainerSection,
                                display: 'flex',
                                color: getContrastColor(bgColor),
                            }}>
                            {style.displayRules && style.displayRulesLocation === 'bottom'
                                ? rulesContainer
                                : null}

                            {enableStats && <Stats />}
                        </div>

                        {enableBackSpriteMontage && <BackspriteMontage pokemon={this.getPokemonByStatus('Team')} />}
                    </div>
                </ErrorBoundary>
            </div>
        );
    }
}

export const Result = connect<Partial<typeof reducers>, any, any>(
    (state: Partial<typeof reducers>) => ({
        pokemon: state.pokemon,
        game: state.game,
        trainer: state.trainer,
        style: state.style,
        box: state.box,
        rules: state.rules,
        editor: state.editor,
    }),
    {
        selectPokemon,
        toggleMobileResultView,
    },
)(ResultBase);
