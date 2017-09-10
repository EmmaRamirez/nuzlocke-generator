import * as React from 'react';
import { TrainerInfoEditor } from './TrainerInfoEditor';
}

export class TrainerEditor extends React.Component<{}, {}> {

  public render() {
    return (
      <div className='trainer-editor'>
        <div>Trainer</div>
        <div>Trainer Image</div>
        <TrainerInfoEditor />
        <div>Badges</div>
      </div>
    );
  }
}