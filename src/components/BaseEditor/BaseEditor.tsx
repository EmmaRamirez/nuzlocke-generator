import * as React from 'react';

export interface BaseEditorState {
    isOpen: boolean;
}

export interface BaseEditorProps {
    name: string;
    defaultOpen?: boolean;
}


export class BaseEditor extends React.Component<BaseEditorProps, BaseEditorState> {
    public static defaultProps = {
        defaultOpen: true,
    };

    public constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.defaultOpen!,
        };
    }

    private toggleEditor = (e) => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    public render() {
        return (
            <div className={`${this.props.name.toLowerCase()}-editor base-editor`}>
                <h4
                    title={`${this.state.isOpen ? 'Collapse' : 'Open'} this editor.`}
                    className='font-bold flex content-center justify-between m-1 mb-2 cursor-pointer text-base'
                    onClick={this.toggleEditor}>
                    {this.props.name}
                    <span
                        className={`bp3-icon bp3-icon-caret-${this.state.isOpen ? 'up' : 'down'}`}
                    />
                </h4>
                {this.state.isOpen ? this.props.children : null}
            </div>
        );
    }
}
