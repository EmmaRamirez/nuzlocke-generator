import * as React from 'react';
import { TrainerInfoEditor } from './TrainerInfoEditor';


export class TrainerEditor extends React.Component<{}, {}> {

  public render() {
    return (
      <div className='trainer-editor'>
        <h4>Trainer</h4>
        <div>Trainer Image</div>
        <TrainerInfoEditor />
        <div>Badges</div>
      </div>
    );
  }
}