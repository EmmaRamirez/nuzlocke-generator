import * as React from 'react';
import { Button, Intent } from '@blueprintjs/core';
import { State } from 'state';


export interface NewBox {
    name: string;
    background: string;
    inheritFrom?: string;
}

// tslint:disable-next-line:no-empty-interfaces
export interface BoxFormProps {
    boxes: State['box'];
}

export interface BoxFormState {
    isBoxFormOpen: boolean;
    newBox: NewBox;
}

export class BoxForm extends React.Component<BoxFormProps, BoxFormState> {
    public state = {
            isBoxFormOpen: false,
            newBox: {
                name: '',
                background: '',
                inheritFrom: 'Team',
            },
    };

    private toggleBoxForm = e => {
        this.setState({isBoxFormOpen: !this.state.isBoxFormOpen});
    }

    private confirmNewBox = e => {

    }

    private editFormInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            newBox: {
                ...this.state.newBox,
                [name]: value,
            }
        });
    }

    public render() {
        const { boxes } = this.props;
        const { isBoxFormOpen } = this.state;

        const inputStyle = {
            margin: '0 auto',
            marginTop: '0.25rem',
            display: 'flex',
            alignItems: 'baseline',
        };

        const labelStyle = {
            marginLeft: '1rem',
            marginRight: '.5rem',
            width: '8rem',
        };


        return (
            <>
            <Button
                onClick={this.toggleBoxForm}
                icon={'plus'}
                className='pt-small'
                style={{
                    margin: '.25rem',
                    height: '2rem',
                    width: '2rem',
                    float: 'right',
                    marginTop: '-.75rem',
                    borderRadius: '50%',
                    transition: '200ms',
                    transform: isBoxFormOpen ? 'rotate(135deg)' : undefined,
                }}
                intent={Intent.SUCCESS}
            >
            </Button>
            <div style={{clear: 'both'}}></div>
            {isBoxFormOpen &&
                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '.25rem',
                    boxShadow: 'rgba(0, 0, 0, 0.33)',
                    margin: '.25rem',
                    marginTop: '-1rem',
                    padding: '0.5rem',
                }}>
                    <div style={inputStyle}>
                        <label style={labelStyle} className='pt-label'>Name</label>
                        <input className='pt-input' autoComplete='false' onInput={this.editFormInput} value={this.state.newBox.name} name='name' placeholder='Box Name' />
                    </div>
                    <div style={inputStyle}>
                        <label style={labelStyle} className='pt-label'>Background</label>
                        <input className='pt-input' onInput={this.editFormInput} value={this.state.newBox.background} name='background' placeholder='Box Background' />
                    </div>
                    <div style={inputStyle}>
                        <label style={labelStyle} className='pt-label'>Inherit From...</label>
                        <div className='pt-select'>
                            <select onChange={this.editFormInput} value={this.state.newBox.inheritFrom} name='inheritFrom'>
                                {boxes.map(box => <option value={box.name}>{box.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Button
                            onClick={this.toggleBoxForm}
                            intent={Intent.DANGER}
                            className='pt-minimal'
                            style={{margin: '0 .5rem'}}>
                            Cancel
                        </Button>
                        <Button
                            style={{margin: '0 .5rem'}}
                            onClick={this.confirmNewBox}
                            intent={Intent.SUCCESS}
                        >
                            Confirm
                        </Button>
                    </div>
                </div>
                }
            </>
        );
    }
}
