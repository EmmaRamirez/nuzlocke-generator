import * as React from 'react';
import { Generation, Styles, handleMovesGenerationsExceptions, getMoveType, typeToColor, getContrastColor, Types } from 'utils';
import { Pokemon } from 'models';
import { connect } from 'react-redux';
import { State } from 'state';
import { noop } from 'redux-saga/utils';

export interface MovesProps {
    generation: Generation;
    moves: Pokemon['moves'];
    movesPosition?: Styles['movesPosition'];
    style: Styles;
    customMoveMap: State['customMoveMap'];
    customTypes: State['customTypes'];
}

export const Move = ({index, style, type, move, customTypes}) => (move && <div
    key={index}
    style={style.usePokemonGBAFont ? {
        fontSize: '1rem',
        background: typeToColor(type, customTypes) || 'transparent',
        color: getContrastColor(typeToColor(type, customTypes))
    } : {
        background: typeToColor(type, customTypes) || 'transparent',
        color: getContrastColor(typeToColor(type, customTypes))
    }}
    className={`move move-${move.replace(/\s/g, '-')?.toLowerCase()} ${
        move.length >= 10 ? 'long-text-move' : ''
    }`}>
    {move}
</div>);

export const getMapMove = (moveMap, move) => moveMap?.find(m => m.move === move);

export class MovesBase extends React.Component<MovesProps> {
    private generateMoves(moves: MovesProps['moves']) {
        const {style, customMoveMap, customTypes} = this.props;

        return (
            moves &&
            moves.map((move, index) => {
                let customMove;
                try {
                    customMove = getMapMove(customMoveMap, move);
                } catch {
                    noop();
                }
                move = move.trim();
                const type = handleMovesGenerationsExceptions({
                    move: move,
                    generation: this.props.generation,
                    originalType: customMove?.type ? (Types[customMove?.type as Types] || getMoveType(move)) : getMoveType(move),
                });
                return (
                    <Move
                        key={index}
                        index={index}
                        style={style}
                        type={type}
                        move={move}
                        customTypes={customTypes}
                    />
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
    (state: State) => ({
        style: state.style,
        customMoveMap: state.customMoveMap,
        customTypes: state.customTypes,
    }),
)(MovesBase);
