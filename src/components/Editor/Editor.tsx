import * as React from 'react';

require('./editor.styl');

export class Editor extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className='editor'>
        <TrainerEditor />
      </div>
    );
  }
}