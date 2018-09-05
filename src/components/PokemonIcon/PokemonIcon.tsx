import * as React from 'react';
import { connect } from 'react-redux';
import { getFormeSuffix, getSpriteIcon, speciesToNumber, listOfPokemon, significantGenderDifferenceList } from 'utils';
import { Gender, GenderElementProps } from 'components/Shared';
import { pokemon } from 'reducers/pokemon';
import { selectPokemon } from 'actions';
import { ErrorBoundary } from '../Shared';
import { store } from 'store';
import { DragSource, ConnectDragSource } from 'react-dnd';

interface PokemonIconProps {
    /** The id of the Pokemon, used for selection **/
    id?: string;
    /** The id of the Pokemon **/
    species: string;
    /** The forme of the Pokemon **/
    forme?: string;
    /** The gender of the Pokemon */
    gender?: GenderElementProps;
    customIcon?: string;
    onClick: () => void;
    selectedId: string | null;
    /** Renders its shiny version if true **/
    shiny?: boolean;
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

const getForme = (forme) => {
    return '';
};

const iconSource = {
    beginDrag(props: PokemonIconProps) {
        console.log('drag has begun', props);
        store.dispatch(selectPokemon(props.id!));
        return {
            id: props.id
        };
    },
    isDragging(props, monitor) {
        return {
            id: props.id
        };
    }
};

export const getIconURL = ({ id, species, forme, shiny, gender, customIcon }) => {
    const baseURL = `icons/pokemon/`;
    const isShiny = shiny ? 'shiny' : 'regular';
    const isFemaleSpecific = significantGenderDifferenceList.includes(species) && Gender.isFemale(gender) ? `female/` : '';
    if (species === 'Egg') return `${baseURL}egg.png`;
    if (customIcon) return customIcon;
    return `${baseURL}${isShiny}/${isFemaleSpecific}${formatSpeciesName(species)}${getFormeSuffix(forme)}.png`;
};

@DragSource('ICON', iconSource as any, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export class PokemonIconBase extends React.Component<PokemonIconProps> {

    constructor(props) {
        super(props);
    }

    public render() {
        const { connectDragSource, isDragging, id, gender, species, forme, onClick, selectedId, className, shiny, style, customIcon } = this.props;
        return connectDragSource!(
            <div
                role='icon'
                onClick={e => {
                    e.preventDefault();
                    onClick && onClick();
                }}
                id={id}
                style={style}
                className={
                    `${id === selectedId ? 'pokemon-icon selected' : 'pokemon-icon'} ${className || ''} ${isDragging ? 'opacity-medium' : ''}`
                }>
                <img
                    style={{ maxHeight: '100%' }}
                    alt={species}
                    src={getIconURL({ id, species, forme, shiny, gender, customIcon })}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(selectPokemon(ownProps.id));
        },
    };
};


export const PokemonIcon = connect(
    (state: any) => ({ selectedId: state.selectedId }),
    mapDispatchToProps
)(
    PokemonIconBase,
);