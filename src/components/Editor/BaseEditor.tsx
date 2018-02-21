import * as React from 'react';

export interface BaseEditorState {
    isOpen: boolean;
}

export interface BaseEditorProps {
    name: string;
}

export class BaseEditor extends React.Component<BaseEditorProps, BaseEditorState> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };
    }

    private toggleEditor = e => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    public render() {
        return (
            <div className={`${this.props.name.toLowerCase()}-editor`}>
                <h4 style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                    { this.props.name }
                    <span
                        role='icon'
                        onClick={this.toggleEditor}
                        className={`pt-icon pt-icon-caret-${this.state.isOpen ? 'up' : 'down'}`}
                    />
                </h4>
                {this.state.isOpen ? this.props.children : null }
            </div>
        );
    }
}
