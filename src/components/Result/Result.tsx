import * as React from 'react';

import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';
import { Scrollbars } from 'react-custom-scrollbars';
import * as domtoimage from 'dom-to-image';
import { cx } from 'emotion';

import { selectPokemon } from 'actions';
import { TeamPokemon, TeamPokemonBaseProps } from 'components/TeamPokemon';
import { DeadPokemon } from 'components/DeadPokemon';
import { BoxedPokemon } from 'components/BoxedPokemon';
import { ChampsPokemon } from 'components/ChampsPokemon';
import { TrainerResult } from 'components/Result';
import { TopBar } from 'components/TopBar';
import { Pokemon, Trainer } from 'models';
import { reducers } from 'reducers';
import { Styles as StyleState, getGameRegion, sortPokes, getContrastColor } from 'utils';

import * as Styles from './styles';

import './Result.styl';
import './themes.styl';

interface ResultProps {
    pokemon: Pokemon[];
    game: any;
    trainer: Trainer;
    box: { key: number; name: string }[];
    selectPokemon: selectPokemon;
    style: StyleState;
    rules: string[];
}

interface ResultState {
    isDownloading: boolean;
    downloadError: string | null;
}

export class ResultBase extends React.PureComponent<ResultProps, ResultState> {
    public resultRef: React.RefObject<HTMLDivElement>;
    constructor(props: ResultProps) {
        super(props);
        this.resultRef = React.createRef();
        this.state = {
            isDownloading: false,
            downloadError: null,
        };
    }

    public componentWillMount() {}

    private renderTeamPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Team')
            .filter(poke => !poke.hidden)
            .sort(sortPokes)
            .map((poke, index) => {
                return <TeamPokemon key={index} pokemon={poke} />;
            });
    }

    private renderErrors() {
        const renderItems: React.ReactNode[] = [];
        if (this.props.pokemon.filter(poke => poke.status === 'Team').length > 6) {
            renderItems.push(
                <div key={uuid()} className='pt-callout pt-intent-danger'>
                    You have more than 6 Pokémon in your party.
                </div>,
            );
        }
        if (this.state.downloadError) {
            renderItems.push(
                <div key={uuid()} className='pt-callout pt-intent-danger'>
                    Image failed to download. Check that you are not using images that link to
                    external sites.
                </div>,
            );
        }
        return <>{renderItems}</>;
    }

    private renderBoxedPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Boxed')
            .filter(poke => !poke.hidden)
            .map((poke, index) => {
                return <BoxedPokemon key={index} {...poke} />;
            });
    }

    private renderChampsPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Champs')
            .filter(poke => !poke.hidden)
            .map((poke, index) => {
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
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Dead')
            .filter(poke => !poke.hidden)
            .map((poke, index) => {
                return <DeadPokemon key={index} {...poke} />;
            });
    }

    private async toImage() {
        const resultNode = this.resultRef.current;
        this.setState({ isDownloading: true });
        try {
            const dataUrl = await domtoimage.toPng(resultNode);
            const link = document.createElement('a');
            link.download = `nuzlocke-${uuid()}.png`;
            link.href = dataUrl;
            link.click();
            this.setState({ downloadError: null, isDownloading: false });
        } catch (e) {
            this.setState({
                downloadError:
                    'Failed to download. This is likely due to your image containing an image resource that does not allow Cross-Origin',
                isDownloading: false,
            });
        }
    }

    public render() {
        const { style, box, trainer, pokemon } = this.props;
        const getNumberOf = (status: string, pokemon: Pokemon[]) =>
            pokemon.filter(v => v.hasOwnProperty('id')).filter(poke => poke.status === status && !poke.hidden)
                .length;
        const numberOfTeam = getNumberOf('Team', pokemon);
        const numberOfDead = getNumberOf('Dead', pokemon);
        const numberOfBoxed = getNumberOf('Boxed', pokemon);
        const numberOfChamps = getNumberOf('Champs', pokemon);
        const bgColor = style ? style.bgColor : '#383840';
        const topHeaderColor = style ? style.topHeaderColor : '#333333';
        const accentColor = style ? style.accentColor : '#111111';
        return (
            <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
                <TopBar onClickDownload={() => this.toImage()}>{this.renderErrors()}</TopBar>
                <div
                    ref={this.resultRef}
                    className={`result container ${(style.template &&
                        style.template.toLowerCase().replace(/\s/g, '-')) ||
                        ''} region-${getGameRegion(
                        this.props.game.name,
                    )} team-size-${numberOfTeam}`}
                    style={{
                        fontFamily: style.usePokemonGBAFont ? 'pokemon_font' : 'inherit',
                        margin: this.state.isDownloading ? '0' : '3rem auto',
                        backgroundColor: bgColor,
                        backgroundImage: `url(${style.backgroundImage})`,
                        backgroundRepeat: style.tileBackground ? 'repeat' : 'no-repeat',
                        border: 'none',
                        height: style.useAutoHeight ? 'auto' : style.resultHeight + 'px',
                        marginBottom: '.5rem',
                        // transform: `scale(${style.zoomLevel})`,
                        // transformOrigin: '0 0',
                        width: style.resultWidth + 'px',
                    }}>
                    <div className='trainer-container' style={{ backgroundColor: topHeaderColor }}>
                        <TrainerResult orientation={this.props.style.trainerSectionOrientation} />
                    </div>
                    {trainer && trainer.notes ? (
                        <div style={{ color: getContrastColor(bgColor) }} className='result-notes'>
                            {trainer.notes}
                        </div>
                    ) : null}
                    <div className='team-container'>{this.renderTeamPokemon()}</div>
                    {numberOfBoxed > 0 ? (
                        <div className='boxed-container'>
                            <h3 style={{ color: getContrastColor(bgColor) }}>{box[1].name}</h3>
                            <div className='boxed-container-inner'>{this.renderBoxedPokemon()}</div>
                        </div>
                    ) : null}
                    {numberOfDead > 0 ? (
                        <div className='dead-container'>
                            <h3 style={{ color: getContrastColor(bgColor) }}>{box[2].name}</h3>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-start',
                                    margin: this.props.style.template === 'Compact' ? 0 : '.5rem',
                                }}>
                                {this.renderDeadPokemon()}
                            </div>
                        </div>
                    ) : null}
                    {numberOfChamps > 0 ? (
                        <div className='champs-container'>
                            <h3 style={{ color: getContrastColor(bgColor) }}>{box[3].name}</h3>
                            <div
                                style={{
                                    margin: this.props.style.template === 'Compact' ? 0 : '.5rem',
                                }}>
                                {this.renderChampsPokemon()}
                            </div>
                        </div>
                    ) : null}
                    {style.displayRules ? (
                        <div className='rules-container'>
                            <h3 style={{ color: getContrastColor(bgColor) }}>Rules</h3>
                            <ol style={{ color: getContrastColor(bgColor) }}>
                                {this.props.rules.map((rule, index) => {
                                    return <li key={index}>{rule}</li>;
                                })}
                            </ol>
                        </div>
                    ) : null}
                </div>
            </Scrollbars>
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
    }),
    {
        selectPokemon,
    },
)(ResultBase);
