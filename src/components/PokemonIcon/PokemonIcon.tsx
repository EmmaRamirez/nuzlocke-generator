import * as React from 'react';
import { connect } from 'react-redux';
import { getSpriteIcon, speciesToNumber, listOfPokemon, dragAndDrop } from 'utils';
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
    onClick: () => void;
    selectedId: string | null;
    /** Renders its shiny version if true **/
    isShiny?: boolean;
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

@DragSource(dragAndDrop.ICON, iconSource as any, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export class PokemonIconBase extends React.Component<PokemonIconProps> {

    constructor(props) {
        super(props);
    }

    public render() {
        const { connectDragSource, isDragging, id, species, forme, onClick, selectedId, className, isShiny, style } = this.props;
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
                    `${id === selectedId ? 'pokemon-icon selected' : 'pokemon-icon'}${className || ''} ${isDragging ? 'opacity-medium' : ''}`
                }>
                <img
                    alt={species}
                    src={`icons/pokemon/${isShiny ? 'shiny' : 'regular'}/${formatSpeciesName(species)}.png`}
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
