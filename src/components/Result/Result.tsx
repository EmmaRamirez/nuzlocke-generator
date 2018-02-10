import * as React from 'react';

import { Pokemon, Trainer } from 'models';
import { StoreContext } from 'utils';
import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';
import { ResizableBox } from 'react-resizable';

import { selectPokemon } from 'actions';

import { TeamPokemon } from './TeamPokemon';
import { DeadPokemon } from './DeadPokemon';
import { BoxedPokemon } from './BoxedPokemon';

require('./Result.styl');

interface ResultProps {
    pokemon: Pokemon[];
    game: any;
    trainer: Trainer;
    box: string[];
    selectPokemon: selectPokemon;
    style: any;
}

const sortPokes = (a, b) => {
    return a.position - b.position;
};

export class ResultBase extends React.Component<ResultProps> {
    constructor(props) {
        super(props);
    }

    public componentWillMount() {}

    private renderTeamPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Team')
            .sort(sortPokes)
            .map((poke, index) => {
                return <TeamPokemon key={index} {...poke} />;
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
                console.log(poke);
                return <BoxedPokemon key={index} {...poke} />;
            });
    }

    private renderDeadPokemon() {
        return this.props.pokemon
            .filter(v => v.hasOwnProperty('id'))
            .filter(poke => poke.status === 'Dead')
            .map((poke, index) => {
                console.log(poke);
                return <DeadPokemon key={index} {...poke} />;
            });
    }

    private renderBadgesOrTrials() {
        const badges = [
            'normalium-z',
            'fightium-z',
            'waterium-z',
            'firium-z',
            'grassium-z',
            'rockium-z',
            'electrium-z',
            'ghostium-z',
            'darkinium-z',
            'dragonium-z',
            'fairium-z',
            'groundium-z',
        ];

        return badges.map((badge, index) => {
            // @ts-ignore
            return (
                <img
                    // @ts-ignore
                    className={this.props.trainer.badges > index ? 'obtained' : 'not-obtained'}
                    key={badge}
                    alt={badge}
                    src={`./img/${badge}.png`}
                />
            );
        });
    }

    private renderTrainer() {
        const { trainer } = this.props;
        const bottomTextStyle: any = { fontSize: '1.1rem', fontWeight: 'bold' };
        return (
            <div className='trainer-wrapper'>
                <img
                    style={{
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        height: '3rem',
                        width: '3rem',
                    }}
                    src={trainer.image ? trainer.image : 'img/moon.jpg'}
                    alt='Moon 2'
                />
                <div className='nuzlocke-title'>{this.props.game.name} Nuzlocke</div>
                {trainer.name === null || trainer.name === '' ? null : (
                    <div className='name column'>
                        <div>name</div>
                        <div style={bottomTextStyle}>{trainer.name}</div>
                    </div>
                )}
                {trainer.id == null || trainer.id === '' ? null : (
                    <div className='id column'>
                        <div>ID</div>
                        <div style={bottomTextStyle}>{trainer.id}</div>
                    </div>
                )}
                {trainer.expShareStatus == null || trainer.expShareStatus === '' ? null : (
                    <div className='id column'>
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

    public render() {
        const { style, box } = this.props;
        const bgColor = style ? style.bgColor : '#383840';
        const topHeaderColor = style ? style.topHeaderColor : '#333333';
        return (
            <>
                {this.renderErrors()}
                <ResizableBox
                    width={'80rem'}
                    height={'900px'}
                    minConstraints={[10, 10]}
                    maxConstraints={[Infinity, Infinity]}>
                    <div className='result container' style={{ backgroundColor: bgColor }}>
                        <div
                            className='trainer-container'
                            style={{ backgroundColor: topHeaderColor }}>
                            {this.renderTrainer()}
                        </div>
                        <div className='team-container'>{this.renderTeamPokemon()}</div>
                        <div className='boxed-container'>
                            <h3>{box[1]}</h3>
                            {this.renderBoxedPokemon()}
                        </div>
                        <div className='dead-container'>
                            <h3>{box[2]}</h3>
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-evenly',
                                }}>
                                {this.renderDeadPokemon()}
                            </div>
                        </div>
                    </div>
                </ResizableBox>
            </>
        );
    }
}

export const Result = connect(
    (state: any) => ({
        pokemon: state.pokemon,
        game: state.game,
        trainer: state.trainer,
        style: state.style,
        box: state.box,
    }),
    {
        selectPokemon,
    },
)(ResultBase);
