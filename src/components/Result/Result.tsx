import * as React from 'react';

import { Pokemon, Trainer } from 'models';
import { getBadges, getGameRegion, sortPokes } from 'utils';
import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';
import { Scrollbars } from 'react-custom-scrollbars';
import * as domtoimage from 'dom-to-image';

import { selectPokemon } from 'actions';

import { TeamPokemon } from 'components/TeamPokemon';
import { DeadPokemon } from 'components/DeadPokemon';
import { BoxedPokemon } from 'components/BoxedPokemon';
import { ChampsPokemon } from 'components/ChampsPokemon';
import { TopBar } from 'components/TopBar';

import { reducers } from 'reducers';

import './Result.styl';

interface ResultProps {
    pokemon: Pokemon[];
    game: any;
    trainer: Trainer;
    box: { key: number; name: string }[];
    selectPokemon: selectPokemon;
    style: any;
    rules: string[];
}

interface ResultState {
    downloadError: string | null;
}

export class ResultBase extends React.PureComponent<ResultProps, ResultState> {
    public resultRef: React.RefObject<HTMLDivElement>;
    constructor(props) {
        super(props);
        this.resultRef = React.createRef();
        this.state = {
            downloadError: null
        };
    }

    public componentWillMount() {}

    private renderTeamPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Team')
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
                    Image failed to download. Check that you are not using images
                    that link to external sites.
                </div>
            );
        }
        return (
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    left: '32%',
                    top: '2px',
                    width: '60%',
                    zIndex: 10,
                }}>
                {renderItems}
            </div>
        );
    }

    private renderBoxedPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Boxed')
            .map((poke, index) => {
                return <BoxedPokemon key={index} {...poke} />;
            });
    }

    private renderChampsPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Champs')
            .map((poke, index) => {
                return <ChampsPokemon key={index} {...poke} />;
            });
    }

    private renderDeadPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Dead')
            .map((poke, index) => {
                return <DeadPokemon key={index} {...poke} />;
            });
    }

    private renderBadgesOrTrials() {
        const { name } = this.props.game;

        if (!this.props.style.displayBadges) {
            return null;
        }

        return getBadges(name).map((badge, index) => {
            // @ts-ignore
            return (
                <img
                    // @ts-ignore
                    className={
                        this.props.trainer &&
                        this.props.trainer.badges &&
                        this.props.trainer.badges.includes(badge)
                            ? 'obtained'
                            : 'not-obtained'
                    }
                    key={badge}
                    alt={badge}
                    src={`./img/${badge}.png`}
                />
            );
        });
    }

    private renderTrainer() {
        const { trainer, game, style } = this.props;
        const bottomTextStyle: any = { fontSize: '1.1rem', fontWeight: 'bold' };
        return (
            <div className='trainer-wrapper'>
                <div
                    style={{
                        color: '#eee',
                        background: style.bgColor,
                        marginRight: '.5rem',
                        width: '100px',
                        borderRadius: '.25rem',
                        textAlign: 'center',
                        textShadow: '0 0 2px #222'
                    }}>
                    {game.name}
                </div>
                {trainer.image ? (
                    <img
                        style={{
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '50%',
                            height: '3rem',
                            width: '3rem',
                        }}
                        src={trainer.image ? trainer.image : 'img/moon.jpg'}
                        alt='Trainer Image'
                    />
                ) : null}
                {trainer.title ? (
                    <div className='nuzlocke-title'>{this.props.trainer.title}</div>
                ) : (
                    <div className='nuzlocke-title'>{this.props.game.name} Nuzlocke</div>
                )}
                {trainer.name == null || trainer.name === '' ? null : (
                    <div className='name column'>
                        <div>name</div>
                        <div style={bottomTextStyle}>{trainer.name}</div>
                    </div>
                )}
                {trainer.money == null || trainer.money.toString() === '' ? null : (
                    <div className='money column'>
                        <div>money</div>
                        <div style={bottomTextStyle}>{trainer.money}</div>
                    </div>
                )}
                {trainer.time == null || trainer.time === '' ? null : (
                    <div className='time column'>
                        <div>time</div>
                        <div style={bottomTextStyle}>{trainer.time}</div>
                    </div>
                )}
                {trainer.id == null || trainer.id === '' ? null : (
                    <div className='id column'>
                        <div>ID</div>
                        <div style={bottomTextStyle}>{trainer.id}</div>
                    </div>
                )}
                {trainer.totalTime == null || trainer.totalTime === '' ? null : (
                    <div className='time column'>
                        <div>time</div>
                        <div style={bottomTextStyle}>{trainer.totalTime}</div>
                    </div>
                )}
                {trainer.expShareStatus == null || trainer.expShareStatus === '' ? null : (
                    <div className='expShareStatus column'>
                        <div>Exp Share</div>
                        <div style={bottomTextStyle}>
                            {(trainer.expShareStatus || '').toUpperCase()}
                        </div>
                    </div>
                )}
                <div className='badge-wrapper'>{this.renderBadgesOrTrials()}</div>
                {/* <img alt='Trainer' className='trainer-image' src='' />
                <div className='game-logo'>
                    <span>
                        <img src='' alt='Game Logo' />
                    </span>
                </div>
                <div className='trainer-name'>
                    <span>name</span>
                    {trainer.name || ''}
                </div> */}
            </div>
        );
    }

    // private onResize = (e, { element, size }) => {
    //     this.setState({
    //         width: size.width,
    //         height: size.height,
    //     });
    // };

    private async toImage() {
        const resultNode = this.resultRef.current;
        try {
            const dataUrl = await domtoimage.toPng(resultNode);
            const link = document.createElement('a');
            link.download = `nuzlocke-${uuid()}.png`;
            link.href = dataUrl;
            link.click();
            this.setState({ downloadError: null });
        } catch (e) {
            this.setState({
                downloadError: 'Failed to download. This is likely due to your image containing an image resource that does not allow Cross-Origin'
            });
        }
    }

    public render() {
        const { style, box, trainer, pokemon } = this.props;
        const getNumberOf = (status: string, pokemon: Pokemon[]) => pokemon.filter(v => v.hasOwnProperty('id')).filter(poke => poke.status === status).length;
        const numberOfDead = getNumberOf('Dead', pokemon);
        const numberOfBoxed = getNumberOf('Boxed', pokemon);
        const numberOfChamps = getNumberOf('Champs', pokemon);
        const bgColor = style ? style.bgColor : '#383840';
        const topHeaderColor = style ? style.topHeaderColor : '#333333';
        return (
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}>
                {this.renderErrors()}
                <TopBar onClickDownload={e => this.toImage()} />
                <div
                    ref={this.resultRef}
                    className={`result container ${(style.template &&
                        style.template.toLowerCase().replace(/\s/g, '-')) ||
                        ''} region-${getGameRegion(this.props.game.name)}`}
                    style={{
                        margin: '3rem auto',
                        backgroundColor: bgColor,
                        backgroundImage: `url(${style.backgroundImage})`,
                        backgroundRepeat: style.tileBackground ? 'repeat' : 'no-repeat',
                        height: style.resultHeight + 'px',
                        marginBottom: '.5rem',
                        transform: `scale(${style.zoomLevel})`,
                        transformOrigin: '0 0',
                        width: style.resultWidth + 'px',
                    }}>
                    <div className='trainer-container' style={{ backgroundColor: topHeaderColor }}>
                        {this.renderTrainer()}
                    </div>
                    {trainer && trainer.notes ? (
                        <div className='result-notes'>{trainer.notes}</div>
                    ) : null}
                    <div className='team-container'>{this.renderTeamPokemon()}</div>
                    {numberOfBoxed > 0 ? (
                        <div className='boxed-container'>
                            <h3>{box[1].name}</h3>
                            <div style={{ marginLeft: '1rem' }}>{this.renderBoxedPokemon()}</div>
                        </div>
                    ) : null}
                    {numberOfDead > 0 ? (
                        <div className='dead-container'>
                            <h3>{box[2].name}</h3>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-start',
                                    margin: '.5rem',
                                }}>
                                {this.renderDeadPokemon()}
                            </div>
                        </div>
                    ) : null}
                    {numberOfChamps > 0 ? (
                        <div className='champs-container'>
                            <h3>{box[3].name}</h3>
                            <div
                                style={{
                                    margin: '.5rem',
                                }}>
                                {this.renderChampsPokemon()}
                            </div>
                        </div>
                    ) : null}
                    {style.displayRules ? (
                        <div className='rules-container'>
                            <h3>Rules</h3>
                            <ol>
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
