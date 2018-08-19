import * as React from 'react';
import { Pokemon } from 'models';
import { Boxes } from 'types';

import {
    generateEmptyPokemon, dragAndDrop,
} from 'utils';
import { editPokemon } from 'actions';

import { PokemonByFilter } from 'components/Shared';
import { DropTarget } from 'react-dnd';
import { store } from 'store';


const boxSource = {
    drop(props, monitor, component) {
        const newStatus = props.name;
        store.dispatch(editPokemon({ status: newStatus }, monitor.getItem().id));
        return {

        };
    },

    hover(props, monitor) {
        return { isHovering: monitor.isOver({ shallow: true }) };
    }
};

export interface BoxProps {
    pokemon: Pokemon[];
    name: string;
    boxId: number;
    filterString: string;
    connectDropTarget?: any;
    canDrop?: boolean;
}

@DropTarget('ICON', boxSource, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop()
}))
export class Box extends React.Component<BoxProps> {
    public render() {
        const { pokemon, name, boxId, filterString, connectDropTarget, canDrop } = this.props;
        const filter = filterString === 'All' ? undefined : filterString;
        return connectDropTarget!(
            <div className={`box ${name}-box`}>
                <span style={{
                    alignItems: 'center',
                    background: canDrop ? 'black' : 'rgba(33, 33, 33, 0.33)',
                    borderRadius: '.25rem',
                    color: '#eee',
                    display: 'inline-flex',
                    minHeight: '2rem',
                    justifyContent: 'center',
                    margin: '.25rem',
                    padding: '.25rem',
                    textAlign: 'center',
                    width: '4rem',
                }}>
                    {name}
                </span>
                <PokemonByFilter team={pokemon} filter={filter} />
            </div>
        );
    }
}
