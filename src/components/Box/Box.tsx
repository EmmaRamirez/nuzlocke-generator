import * as React from 'react';
import { Pokemon } from 'models';
import { Boxes } from 'types';

import { generateEmptyPokemon, dragAndDrop, accentedE } from 'utils';
import { editPokemon, clearBox, editBox, deleteBox } from 'actions';

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
    editBox: editBox;
    background?: string;
    deleteBox: deleteBox;
}

export const wallpapers = [
    {
        name: 'Route 1',
        background: 'route-1',
    },
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
        name: 'Bubbles',
        background: 'bubbles',
    },
    {
        name: 'Beach',
        background: 'beach',
    },
    {
        name: 'Seafloor',
        background: 'seafloor',
    },
    {
        name: 'Croagunk',
        background: 'croagunk',
    },
    {
        name: 'Simple',
        background: 'simple',
    },
    {
        name: 'Snow',
        background: 'snow',
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

    private deleteBox = (key: number) => () => {
        this.props.deleteBox(key);
    };

    private editBox = (background: string, name: string, id: number) => () => {
        this.props.editBox(name, background, id);
    }

    private getDefault(name) {
        if (name === 'Team') return 'route-1';
        if (name === 'Boxed') return 'grass-meadow';
        if (name === 'Dead') return 'stars';
        if (name === 'Champs') return 'sky';
        return undefined;
    }

    private getBoxBackground(background, name) {
        const bg = background || this.getDefault(name);
        return (bg && bg.startsWith('http')) ? `url(${bg})` : `url(./assets/img/box/${bg}.png)`;
    }

    public render() {
        const { pokemon, name, boxId, filterString, connectDropTarget, canDrop, background } = this.props;
        const filter = filterString === 'All' ? undefined : filterString;

        console.log('deleteButton', name, !['Team', 'Boxed', 'Dead', 'Champs'].includes(name));

        return connectDropTarget!(
            <div
                style={{
                    backgroundImage: this.getBoxBackground(background, name)
                }}
                className={`box ${name.replace(/\s/g, '-')}-box`}
            >
                <Popover
                    position={Position.BOTTOM_LEFT}
                    minimal
                    interactionKind={PopoverInteractionKind.CLICK_TARGET_ONLY}
                    popoverClassName={'no-list-item-types'}
                    content={<>
                        {/*<MenuItem className='pt-fill' text='Edit' />*/}
                        <MenuItem text='Change Wallpaper'>
                            {wallpapers.map(wall => <MenuItem onClick={this.editBox(wall.background, name, boxId)} text={wall.name} />)}
                        </MenuItem>
                        <MenuItem onClick={this.clearBox(name)} className='pt-fill' text={`Clear Box`} />
                        {!['Team', 'Boxed', 'Dead', 'Champs'].includes(name) && <MenuItem onClick={this.deleteBox(boxId)} className='pt-fill' text={'Delete Box'} />}
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
                            minWidth: '5rem',
                            cursor: 'pointer',
                            userSelect: 'none',
                        }}>
                        <Icon style={{transform: 'rotate(90deg)'}} icon='more' />
                        {name}
                    </span>
                </Popover>
                <PokemonByFilter team={pokemon} filter={filter} />
            </div>
        );
    }
}

export const Box = connect(
    null,
    {
        clearBox,
        editBox,
        deleteBox,
    },
    null,
    {pure: false}
)(BoxBase);
