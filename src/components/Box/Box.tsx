import * as React from 'react';
import { Pokemon } from 'models';
import { Boxes } from 'models';

import { editPokemon, clearBox, editBox, deleteBox, deletePokemon } from 'actions';
import { Box as BoxType } from 'models';

import { PokemonByFilter } from 'components/Shared';
import { DropTarget, DragSource, ConnectDragSource, ConnectDropTarget } from 'react-dnd';
import { store } from 'store';
import {
    Icon,
    Popover,
    PopoverInteractionKind,
    Menu,
    MenuItem,
    Position,
    Button,
    Intent,
    Alert,
    Classes,
} from '@blueprintjs/core';
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

const boxSourceDrag = {
    beginDrag(props) {
        return props;
    },
    isDragging(props, monitor) {
        return props;
    },
};

export type BoxProps = {
    pokemon: Pokemon[];
    connectDropTarget?: ConnectDropTarget;
    connectDragSource?: ConnectDragSource;
    canDrop?: boolean;
    clearBox: clearBox;
    editBox: editBox;
    deletePokemon: deletePokemon;
    background?: string;
    deleteBox: deleteBox;
} & BoxType;

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
    },
];

export interface BoxState {
    deleteConfirmationOpen: boolean;
}

@DropTarget('ICON', boxSource, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
}))
export class BoxBase extends React.PureComponent<BoxProps, BoxState> {
    public state = {
        deleteConfirmationOpen: false,
    };

    private clearBox = (name: string) => () => {
        this.props.clearBox(name);
    };

    private deleteBox = (id: number) => () => {
        this.setState({ deleteConfirmationOpen: true });
    };

    private editBox = (id: number, edits: Partial<BoxType>) => () => {
        this.props.editBox(id, edits);
    };

    private toggleCollapse = (isCollapsed, id) => () => {
        this.props.editBox(id, { collapsed: !isCollapsed });
    };

    private static getDefault(name) {
        if (name === 'Team') return 'route-1';
        if (name === 'Boxed') return 'grass-meadow';
        if (name === 'Dead') return 'stars';
        if (name === 'Champs') return 'sky';
        return undefined;
    }

    private static getBoxBackground(background, name) {
        const bg = background || BoxBase.getDefault(name);
        return bg && bg.startsWith('http') ? `url(${bg})` : `url(./assets/img/box/${bg}.png)`;
    }

    private toggleDialog = () =>
        this.setState({ deleteConfirmationOpen: !this.state.deleteConfirmationOpen });

    public render() {
        const {
            pokemon,
            inheritFrom,
            name,
            id,
            connectDropTarget,
            canDrop,
            background,
            collapsed: isCollapsed,
        } = this.props;

        const collapsedStyle = isCollapsed
            ? {
                height: '54px',
                overflow: 'hidden',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.33) 25%, black 75%)',
                marginBottom: '-18px',
            }
            : {};

        return connectDropTarget!(
            <div
                style={{
                    backgroundImage: BoxBase.getBoxBackground(background, name),
                    ...collapsedStyle,
                }}
                className={`box ${name.replace(/\s/g, '-')}-box`}>
                <Alert
                    icon="trash"
                    isOpen={this.state.deleteConfirmationOpen}
                    onCancel={this.toggleDialog}
                    onConfirm={(e) => {
                        this.props.deleteBox(id);

                        pokemon
                            .filter((pokemon) => pokemon.status === name)
                            .forEach((element) => {
                                this.props.deletePokemon(element.id);
                            });

                        this.setState({ deleteConfirmationOpen: true });
                    }}
                    confirmButtonText="Delete Box"
                    cancelButtonText="Cancel"
                    intent={Intent.DANGER}>
                    <p>
                        This will delete the currently selected Box and all Pokémon stored inside
                        the box. Are you sure you want to do that?
                    </p>
                </Alert>
                <Popover
                    position={Position.BOTTOM_LEFT}
                    minimal
                    interactionKind={PopoverInteractionKind.CLICK_TARGET_ONLY}
                    popoverClassName={'no-list-item-types'}
                    content={
                        <>
                            {/*<MenuItem className='bp3-fill' text='Edit' />*/}
                            <MenuItem text="Change Wallpaper">
                                {wallpapers.map((wall) => (
                                    <MenuItem
                                        key={wall.name}
                                        onClick={this.editBox(id, { background: wall.background })}
                                        text={wall.name}
                                    />
                                ))}
                            </MenuItem>
                            {!['Team', 'Boxed', 'Dead', 'Champs'].includes(name) && (
                                <MenuItem text="Change Type">
                                    {['Team', 'Boxed', 'Dead', 'Champs'].map((b) => (
                                        <MenuItem
                                            key={b}
                                            onClick={this.editBox(id, { inheritFrom: b })}
                                            text={
                                                b === inheritFrom ? (
                                                    <>
                                                        <Icon icon="small-tick" /> {b}
                                                    </>
                                                ) : (
                                                    b
                                                )
                                            }
                                        />
                                    ))}
                                </MenuItem>
                            )}
                            <MenuItem
                                onClick={this.toggleCollapse(isCollapsed, id)}
                                text={isCollapsed ? 'Expand Box' : 'Collapse Box'}
                            />
                            <MenuItem
                                onClick={this.clearBox(name)}
                                className={Classes.FILL}
                                text={'Clear Box'}
                            />
                            {!['Team', 'Boxed', 'Dead', 'Champs'].includes(name) && (
                                <MenuItem
                                    onClick={this.deleteBox(id)}
                                    className={Classes.FILL}
                                    text={'Delete Box'}
                                />
                            )}
                        </>
                    }>
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
                        <Icon style={{ transform: 'rotate(90deg)' }} icon="more" />
                        {name}
                    </span>
                </Popover>
                <PokemonByFilter team={pokemon} status={name} />
            </div>,
        );
    }
}

export const Box = connect(null, {
    clearBox,
    editBox,
    deleteBox,
    deletePokemon,
})(BoxBase);
