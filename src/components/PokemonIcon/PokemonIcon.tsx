import * as React from 'react';
import { connect } from 'react-redux';
import {
    getIconFormeSuffix,
    Forme,
    Species,
    significantGenderDifferenceList,
    handleMovesGenerationsExceptions,
} from 'utils';
import { Gender, GenderElementProps } from 'components/Shared';
import { editPokemon, selectPokemon, SELECT_POKEMON } from 'actions';
import { store } from 'store';
import { DragSource, ConnectDragSource, ConnectDropTarget, DropTarget } from 'react-dnd';
import { Pokemon } from 'models';
import { Dispatch } from 'redux';
import { State } from 'state';
import { Omit } from 'ramda';
import { Action } from 'actions';
import { normalizeSpeciesName } from 'utils/getters/normalizeSpeciesName';
import { PokemonImage } from 'components/Shared/PokemonImage';

interface PokemonIconProps {
    /** The id of the Pokemon, used for selection **/
    id?: Pokemon['id'];
    /** The id of the Pokemon **/
    species: Pokemon['species'];
    /** The forme of the Pokemon **/
    forme?: Pokemon['forme'];
    /** The gender of the Pokemon */
    gender?: GenderElementProps;
    customIcon?: Pokemon['customIcon'];
    hidden?: Pokemon['hidden'];
    egg?: Pokemon['egg'];
    position?: Pokemon['position'];
    onClick: () => void;
    selectedId: string | null;
    /** Renders its shiny version if true **/
    shiny?: Pokemon['shiny'];
    status?: Pokemon['status'];
    className?: string;
    style?: React.CSSProperties;
    styles?: State['style'];
    includeTitle?: boolean;

    connectDragSource?: ConnectDragSource;
    connectDropTarget?: ConnectDropTarget;
    canDrop?: boolean;
    isDragging?: boolean;
}

const iconSourceDrop = {
    drop(props, monitor, component) {
        const newPosition = props.position;
        const newId = props.id;
        const newStatus = props.status;
        const item = monitor.getItem();
        const oldId = item?.id;
        const oldPosition = item?.position;
        const oldStatus = item?.status;
        // Prevent us from destroying a Pokemon's position accidentally
        if (oldId == null || oldPosition == null || oldStatus == null) {
            return;
        }
        store.dispatch(editPokemon(
            {
                position: oldPosition,
                status: oldStatus,
            },
            newId,
        ));
        store.dispatch(editPokemon(
            {
                position: newPosition,
                status: newStatus,
            },
            oldId
        ));
        //store.dispatch(editPokemon({ position: newPosition }, id));
        return {};
    },

    hover(props, monitor) {
        return {
            isHovering: monitor.isOver({ shallow: true })
        };
    }
};

const iconSource = {
    beginDrag(props: PokemonIconProps) {
        store.dispatch(selectPokemon(props.id!));
        return {
            id: props.id,
            position: props.position,
            status: props.status,
        };
    },
    isDragging(props: PokemonIconProps) {
        return {
            id: props.id,
            position: props.position,
            status: props.status,
        };
    },
};

type IconURLArgs = Pick<
Pokemon,
'id' | 'species' | 'forme' | 'shiny' | 'gender' | 'customIcon' | 'egg'
>;

export const getIconURL = ({ id, species, forme, shiny, gender, customIcon, egg }: IconURLArgs) => {
    const baseURL = 'icons/pokemon/';
    const isShiny = shiny ? 'shiny' : 'regular';
    const isFemaleSpecific =
        significantGenderDifferenceList.includes(species) && Gender.isFemale(gender)
            ? 'female/'
            : '';

    if (species === 'Egg' || egg) return `${baseURL}egg.png`;

    return `${baseURL}${isShiny}/${isFemaleSpecific}${normalizeSpeciesName(
        species as Species,
    )}${getIconFormeSuffix(forme as keyof typeof Forme)}.png`;
};

export function PokemonIconPlain({
    isDragging,
    canDrop,
    id,
    gender,
    species,
    forme,
    onClick,
    selectedId,
    className,
    shiny,
    egg,
    style,
    customIcon,
    includeTitle,
    imageStyle,
}: PokemonIconProps & { imageStyle: any }) {
    return (
        <div
            role="presentation"
            onClick={(e) => {
                e.preventDefault();
                onClick && onClick();
            }}
            id={id}
            title={includeTitle ? species : undefined}
            style={style}
            className={`${id === selectedId ? 'pokemon-icon selected' : 'pokemon-icon'} ${
                className || ''
            } ${isDragging ? 'opacity-medium' : ''} ${canDrop ? 'droppable' : ''}`}>
            {customIcon ? <PokemonImage
                url={customIcon}
            >
                {(image) => <img
                    style={imageStyle}
                    alt={species}
                    src={image}
                />}
            </PokemonImage> : <img
                style={imageStyle}
                alt={species}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src= 'icons/pokemon/unknown.png';
                }}
                src={getIconURL({
                    id,
                    species,
                    forme,
                    shiny,
                    gender,
                    egg,
                    customIcon,
                } as IconURLArgs)}
            /> }
        </div>
    );
}


@DragSource('ICON', iconSource as any, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
@DropTarget('ICON', iconSourceDrop, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
}))
export class PokemonIconBase extends React.Component<PokemonIconProps> {
    public constructor(props: any) {
        super(props);
    }

    public render() {
        const { connectDragSource, connectDropTarget, styles, hidden } = this.props;
        const imageStyle = {
            maxHeight: '100%',
            opacity: hidden ? 0.5 : 1,
            height: '32px',
            maxWidth: 'auto',
            imageRendering: styles?.iconRendering,
        };
        return connectDropTarget!(connectDragSource!(
            <div>
                <PokemonIconPlain imageStyle={imageStyle} {...this.props} />
            </div>,
        ));
    }
}

const mapDispatchToProps = (
    dispatch: Dispatch<Action<SELECT_POKEMON>>,
    ownProps: Omit<PokemonIconProps, 'onClick' | 'selectedId'>,
) => {
    return {
        onClick: () => {
            dispatch(selectPokemon(ownProps.id!));
        },
    };
};

export const PokemonIcon: React.ComponentClass<Omit<
PokemonIconProps,
'onClick' | 'selectedId'
>> = connect(
    (state: Pick<State, keyof State>) => ({ selectedId: state.selectedId, styles: state.style }),
    mapDispatchToProps,
)(PokemonIconBase as any);
