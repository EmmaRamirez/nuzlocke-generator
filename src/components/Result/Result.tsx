import * as React from 'react';

import { Pokemon, Trainer } from '../../models';
import { StoreContext } from '../../utils';
import { connect } from 'react-redux';

import { TeamPokemon } from './TeamPokemon';

require('./Result.styl');

interface ResultProps {
    pokemon: Pokemon[];
    game: any;
    trainer: Trainer;
}

interface ResultState {
    pokemon: Pokemon[];
    game: any;
    trainer: Trainer;
    style: object;
    problems: string[];
}

export class ResultBase extends React.Component<ResultProps, ResultState> {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [] as Pokemon[],
            game: {},
            trainer: {},
            style: {},
            problems: [] as string[],
        };
    }

    public componentWillMount() {
    }


    private renderTeamPokemon() {
        return this.props.pokemon.filter(v => v.hasOwnProperty('id')).map((poke, index) => {
            console.log(poke);
            return <TeamPokemon key={index} {...poke} />;
        });
    }

    private renderErrors() {
        const renderItems: React.ReactNode[] = [];
        if (this.props.pokemon.filter(poke => poke.status === 'Team').length > 6) {
            renderItems.push(
                <div className='pt-callout pt-intent-danger'>
                    You have more than 6 Pokémon in your party.
                </div>,
            );
        }
        return renderItems;
    }

    private renderBoxedPokemon() {
        return null;
    }

    private renderDeadPokemon() {
        return null;
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
            'groundium-z'
        ];

        return badges.map((badge, index) => {
            // @ts-ignore
            return <img className={ this.props.trainer.badges > index ? 'obtained' : 'not-obtained'} key={badge} alt={badge} src={`./img/${badge}.png`} />
        });
    }

    private renderTrainer() {
        const { trainer } = this.state;
        return (
            <div className='trainer-wrapper'>
                <div className='nuzlocke-title'>{ this.props.game.name } Nuzlocke</div>
                <div className='badge-wrapper'>
                    {
                        this.renderBadgesOrTrials()
                    }
                </div>
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
        return (
            <div className='result container'>
                {this.renderErrors()}
                <div className='trainer-container'>{this.renderTrainer()}</div>
                <div className='team-container'>{this.renderTeamPokemon()}</div>
                <div className='boxed-container'>{this.renderBoxedPokemon()}</div>
                <div className='dead-container'>{this.renderDeadPokemon()}</div>
            </div>
        );
    }
}

export const Result = connect(
    (state:any) => ({
        pokemon: state.pokemon,
        game: state.game,
        trainer: state.trainer
    }),
    {

    }
)(ResultBase);