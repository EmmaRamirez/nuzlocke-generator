import * as React from 'react';

import { LinkedTrainerInfoEditField } from './LinkedTrainerInfoEditField';

export class TrainerInfoEditor extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  private onInput = e => {

  }

  public render() {
    return (
      <div className='trainer-info-editor'>
        <LinkedTrainerInfoEditField onInput={this.onInput} label='Name' name='name' placeholder='Trainer Name' />
        <LinkedTrainerInfoEditField onInput={this.onInput} label='ID' name='id' placeholder='Trainer ID' />
        <LinkedTrainerInfoEditField onInput={this.onInput} label='Time' name='time' placeholder='0:00' />
        <LinkedTrainerInfoEditField onInput={this.onInput} label='Money' name='money' placeholder='$0' />
      </div>
    );
  }
}