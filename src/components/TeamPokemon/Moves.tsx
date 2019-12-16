import * as React from 'react';
import { Generation, Styles, handleMovesGenerationsExceptions, getMoveType } from 'utils';
import { Pokemon } from 'models';
import { connect } from 'react-redux';
import { State } from 'state';

export interface MovesProps {
    generation: Generation;
    moves: Pokemon['moves'];
    movesPosition?: Styles['movesPosition'];
    style: Styles;
}

export class MovesBase extends React.Component<MovesProps> {
    private generateMoves(moves: MovesProps['moves']) {
        const {style} = this.props;

        return (
            moves &&
            moves.map((move, index) => {
                move = move.trim();
                const type = handleMovesGenerationsExceptions({
                    move: move,
                    generation: this.props.generation,
                    originalType: getMoveType(move),
                });
                return (
                    <div
                        key={index}
                        style={style.usePokemonGBAFont ? {fontSize: '1rem'} : {}}
                        className={`move ${type}-type ${
                            move.length >= 10 ? 'long-text-move' : ''
                        }`}>
                        {move}
                    </div>
                );
            })
        );
    }

    public render() {
        if (this.props.moves == null) return null;
        return (
            <div className={`pokemon-moves ${this.props.movesPosition}`}>
                {this.generateMoves(this.props.moves)}
            </div>
        );
    }
}

export const Moves = connect(
    (state: State) => ({style: state.style}),
)(MovesBase);
