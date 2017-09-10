import * as React from 'react';

import { TrainerInfoEditField } from './TrainerInfoEditField';

export class TrainerInfoEditor extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className='trainer-info-editor'>
        <TrainerInfoEditField label='Name' name='trainer-name' placeholder='Trainer Name' />
        <TrainerInfoEditField label='ID' name='trainer-id' placeholder='Trainer ID' />
        <TrainerInfoEditField label='Time' name='trainer-time' placeholder='0:00' />
        <TrainerInfoEditField label='Money' name='trainer-money' placeholder='$0' />
      </div>
    );
  }
}