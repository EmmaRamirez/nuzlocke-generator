import * as React from 'react';
import { compose, withState } from 'recompose';
import { Alert, Intent } from '@blueprintjs/core';

import { StoreContext } from '../../utils';

// const recomposeDelete = withState('dialogOn', 'setDialog', false);

@StoreContext
export class DeletePokemonButton extends React.Component<{ id: string, onClick: () => void, onChange: (e) => void }, { dialogOn: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      dialogOn: false,
    };
    this.toggleDialog = this.toggleDialog.bind(this);
  }
  public toggleDialog() {
    this.setState({
      dialogOn: !this.state.dialogOn
    });
  }

  public render() {
    return <div className='delete-pokemon-button'>
      <Alert
        iconName='trash'
        isOpen={this.state.dialogOn && this.context.store.getState().confirmation}
        onCancel={this.toggleDialog}
        onConfirm={this.props.onClick}
        confirmButtonText='Delete Pokemon'
        cancelButtonText='Cancel'
        intent={Intent.DANGER}
      >
        <p>This will delete the currently selected Pokemon. Are you sure you want to do that?</p>

        <label className='pt-control pt-checkbox .modifier'>
          <input onChange={(e) => this.props.onChange(e)}  type='checkbox' />
          <span className='pt-control-indicator'></span>
          Don't Ask Me For Confirmation Again
        </label>
      </Alert>
      <i role='button' onClick={e => {
        if (this.context.store.getState().confirmation) {
          this.toggleDialog();
        } else {
          this.props.onClick();
        }
      }} className='fa fa-trash' title='Delete Pokemon'></i>
    </div>;
  }
}