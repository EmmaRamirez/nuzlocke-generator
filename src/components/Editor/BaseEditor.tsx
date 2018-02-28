import * as React from 'react';

export interface BaseEditorState {
    isOpen: boolean;
}

export interface BaseEditorProps {
    name: string;
}

const baseEditorStyle: any = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export class BaseEditor extends React.Component<BaseEditorProps, BaseEditorState> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };
    }

    private toggleEditor = e => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    public render() {
        return (
            <div className={`${this.props.name.toLowerCase()}-editor base-editor`}>
                <h4
                    title={`${this.state.isOpen ? 'Collapse' : 'Open'} this editor.`}
                    style={baseEditorStyle}
                    onClick={this.toggleEditor}>
                    {this.props.name}
                    <span
                        className={`pt-icon pt-icon-caret-${this.state.isOpen ? 'up' : 'down'}`}
                    />
                </h4>
                {this.state.isOpen ? this.props.children : null}
            </div>
        );
    }
}
