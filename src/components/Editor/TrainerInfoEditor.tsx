import * as React from 'react';

import { TrainerInfoEditField } from './TrainerInfoEditField';

export class TrainerInfoEditor extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  private onInput = e => {

  }

  public render() {
    return (
      <div className='trainer-info-editor'>
        <TrainerInfoEditField onInput={this.onInput} label='Name' name='trainer-name' placeholder='Trainer Name' />
        <TrainerInfoEditField onInput={this.onInput} label='ID' name='trainer-id' placeholder='Trainer ID' />
        <TrainerInfoEditField onInput={this.onInput} label='Time' name='trainer-time' placeholder='0:00' />
        <TrainerInfoEditField onInput={this.onInput} label='Money' name='trainer-money' placeholder='$0' />
      </div>
    );
  }
}