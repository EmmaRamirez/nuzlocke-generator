import * as React from 'react';
import { getSpriteIcon, StoreContext } from '../../utils';


interface PokemonIconProps {
  id: string;
  species: string;
  onClick: () => void;
}

interface PokemonIconState {
  selectedId: string;
}

@StoreContext
export class PokemonIcon extends React.Component<PokemonIconProps, PokemonIconState> {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: ''
    };
  }

  public componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState({
        selectedId: this.context.store.getState().selectedId
      });
    });
  }

  public render() {
    const { id, species } = this.props;

    return <div role='icon' onClick={(e => {
      e.preventDefault();
      this.props.onClick();
    })} className={id === this.state.selectedId ? 'pokemon-icon selected' : 'pokemon-icon'}>
      <img src={getSpriteIcon(species)} alt={species} />
    </div>;
  }
}