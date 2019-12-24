import * as React from 'react';
import { Pokemon } from 'models';
import { Boxes } from 'types';

import { generateEmptyPokemon, dragAndDrop, accentedE } from 'utils';
import { editPokemon, clearBox } from 'actions';

import { PokemonByFilter } from 'components/Shared';
import { DropTarget } from 'react-dnd';
import { store } from 'store';
import { Icon, Popover, PopoverInteractionKind, Menu, MenuItem, Position, Button } from '@blueprintjs/core';
import { connect } from 'react-redux';

const boxSource = {
    drop(props, monitor, component) {
        const newStatus = props.name;
        store.dispatch(editPokemon({ status: newStatus }, monitor.getItem().id));
        return {};
    },

    hover(props, monitor) {
        return { isHovering: monitor.isOver({ shallow: true }) };
    },
};

export interface BoxProps {
    pokemon: Pokemon[];
    name: string;
    boxId: number;
    filterString: string;
    connectDropTarget?: any;
    canDrop?: boolean;
    clearBox: clearBox;
}

const wallpapers = [
    {
        name: 'Grass Meadow',
        background: 'grass-meadow',
    },
    {
        name: 'Stars',
        background: 'stars',
    },
    {
        name: 'Sky',
        background: 'sky',
    },
    {
        name: 'Zig Zag',
        background: '',
    },
    {
        name: 'Flames',
        background: '',
    },
    {
        name: 'Underwater',
        background: '',
    },
    {
        name: 'Beach',
        background: '',
    },
    {
        name: 'Cave',
        background: '',
    },
    {
        name: 'Machine',
        background: '',
    }
];

@DropTarget('ICON', boxSource, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
}))
export class BoxBase extends React.Component<BoxProps> {
    private clearBox = (name: string) => () => {
        this.props.clearBox(name);
    };

    public render() {
        const { pokemon, name, boxId, filterString, connectDropTarget, canDrop } = this.props;
        const filter = filterString === 'All' ? undefined : filterString;
        console.log(name);
        return connectDropTarget!(
            <div className={`box ${name}-box`}>
                <Popover
                    position={Position.BOTTOM_LEFT}
                    minimal
                    interactionKind={PopoverInteractionKind.CLICK_TARGET_ONLY}
                    popoverClassName={'no-list-item-types'}
                    content={<>
                        <MenuItem className='pt-fill' text='Edit' />
                        <MenuItem text='Change Wallpaper'>
                            {wallpapers.map(wall => <MenuItem text={wall.name} />)}
                        </MenuItem>
                        <MenuItem onClick={this.clearBox(name)} className='pt-fill' text={`Clear Box`} />
                    </>}
                >
                    <span
                        style={{
                            alignItems: 'center',
                            background: canDrop ? 'black' : 'rgba(33, 33, 33, 0.33)',
                            borderRadius: '.25rem',
                            color: '#eee',
                            display: 'inline-flex',
                            minHeight: '2rem',
                            justifyContent: 'space-around',
                            margin: '.25rem',
                            padding: '.25rem',
                            textAlign: 'center',
                            width: '5rem',
                            cursor: 'pointer',
                            userSelect: 'none',
                        }}>
                        <Icon style={{transform: 'rotate(90deg)'}} icon='more' />
                        {name}
                    </span>
                </Popover>
                <PokemonByFilter team={pokemon} filter={filter} />
            </div>,
        );
    }
}

export const Box = connect(
    null,
    {
        clearBox,
    }
)(BoxBase);
