import * as React from 'react';
import { connect } from 'react-redux';
import {
    getFormeSuffix,
    getSpriteIcon,
    speciesToNumber,
    listOfPokemon,
    significantGenderDifferenceList,
    Forme,
} from 'utils';
import { Gender, GenderElementProps } from 'components/Shared';
import { pokemon } from 'reducers/pokemon';
import { selectPokemon } from 'actions';
import { ErrorBoundary } from '../Shared';
import { store } from 'store';
import { DragSource, ConnectDragSource } from 'react-dnd';
import { Pokemon } from 'models';
import { Dispatch } from 'redux';
import { State } from 'state';
import { Omit } from 'ramda';

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
    onClick: () => void;
    selectedId: string | null;
    /** Renders its shiny version if true **/
    shiny?: Pokemon['shiny'];
    className?: string;
    style?: React.CSSProperties;

    connectDragSource?: ConnectDragSource;
    isDragging?: boolean;
}

const formatSpeciesName = (species: string | null) => {
    if (species == null) return 'unknown';
    if (species === 'Nidoran♀') return 'nidoran-f';
    if (species === 'Nidoran♂') return 'nidoran-m';
    if (species === 'Mr. Mime') return 'mr-mime';
    if (species.startsWith('Farfetch')) return 'farfetchd';
    if (species === 'Mime Jr.') return 'mime-jr';
    if (species === 'Flabébé') return 'flabebe';
    if (species.startsWith('Tapu')) return species.toLowerCase().replace(/\s/, '-');
    if (listOfPokemon.indexOf(species) < 0) return 'unknown';
    return species.toLowerCase();
};

const getForme = (forme: Forme) => {
    return '';
};

const iconSource = {
    beginDrag(props: PokemonIconProps) {
        console.log('drag has begun', props);
        store.dispatch(selectPokemon(props.id!));
        return {
            id: props.id,
        };
    },
    isDragging(props: PokemonIconProps) {
        return {
            id: props.id,
        };
    },
};

type IconURLArgs = Pick<Pokemon, 'id' | 'species' | 'forme' | 'shiny' | 'gender' | 'customIcon' | 'egg'>;

export const getIconURL = ({ id, species, forme, shiny, gender, customIcon, egg }: IconURLArgs) => {
    const baseURL = `icons/pokemon/`;
    const isShiny = shiny ? 'shiny' : 'regular';
    const isFemaleSpecific =
        significantGenderDifferenceList.includes(species) && Gender.isFemale(gender)
            ? `female/`
            : '';
    if (species === 'Egg' || egg) return `${baseURL}egg.png`;
    if (customIcon) return customIcon;
    return `${baseURL}${isShiny}/${isFemaleSpecific}${formatSpeciesName(species)}${getFormeSuffix(
        forme as keyof typeof Forme
    )}.png`;
};

@DragSource('ICON', iconSource as any, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))
export class PokemonIconBase extends React.Component<PokemonIconProps> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const {
            connectDragSource,
            isDragging,
            id,
            gender,
            species,
            forme,
            onClick,
            selectedId,
            className,
            shiny,
            style,
            hidden,
            customIcon,
        } = this.props;
        const imageStyle = { maxHeight: '100%', opacity: hidden ? 0.5 : 1 };
        return connectDragSource!(
            <div
                role='icon'
                onClick={e => {
                    e.preventDefault();
                    onClick && onClick();
                }}
                id={id}
                style={style}
                className={`${
                    id === selectedId ? 'pokemon-icon selected' : 'pokemon-icon'
                } ${className || ''} ${isDragging ? 'opacity-medium' : ''}`}>
                <img
                    style={imageStyle}
                    alt={species}
                    src={getIconURL({
                        id,
                        species,
                        forme,
                        shiny,
                        gender,
                        customIcon,
                    } as IconURLArgs)}
                />
            </div>,
        );
    }
}

const mapDispatchToProps = (
    dispatch: Dispatch<State>,
    ownProps: Omit<PokemonIconProps, 'onClick' | 'selectedId'>,
) => {
    return {
        onClick: () => {
            dispatch(selectPokemon(ownProps.id!));
        },
    };
};

export const PokemonIcon: React.ComponentClass<
    Omit<PokemonIconProps, 'onClick' | 'selectedId'>
> = connect(
    (state: Pick<State, keyof State>) => ({ selectedId: state.selectedId }),
    mapDispatchToProps,
)(PokemonIconBase as any);
