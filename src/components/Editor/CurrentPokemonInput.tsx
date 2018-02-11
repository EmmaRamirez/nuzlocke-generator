import * as React from 'react';
import { connect } from 'react-redux';

import { matchSpeciesToTypes } from 'utils';
import { editPokemon, selectPokemon } from 'actions';

import { ErrorBoundary } from 'components/Shared';

import { TagInput } from '@blueprintjs/core';

interface CurrentPokemonInputProps {
    labelName: string;
    inputName: string;
    type: string;
    value: any;
    placeholder?: string;
    options?: string[];
    editPokemon?: any;
    selectedId: any;
    selectPokemon?: any;
}

export class CurrentPokemonInputBase extends React.Component<CurrentPokemonInputProps, {}> {
    constructor(props: CurrentPokemonInputProps) {
        super(props);
    }

    public onChange = (
        e: React.SyntheticEvent<any> & any,
        inputName: string,
        position?: number,
        value?: any,
    ) => {
        let edit;
        if (inputName === 'types' && position != null) {
            edit = {
                [inputName]: value,
            };
            edit[inputName][position] = e.target.value;
        } else if (inputName === 'species') {
            edit = {
                [inputName]: e.target.value,
                types: matchSpeciesToTypes(e.target.value),
            };
        } else if (inputName === 'moves') {
            edit = {
                [inputName]: e.target.value,
            };
        } else {
            edit = {
                [inputName]: e.target.value,
            };
        }
        this.props.editPokemon && this.props.editPokemon(edit, this.props.selectedId);
        this.props.selectPokemon && this.props.selectPokemon(this.props.selectedId);
    };

    public getInput({ labelName, inputName, type, value, placeholder, options }: any) {
        value = value == null ? '' : value;
        if (type === 'moves') {
            return (
                <ErrorBoundary>
                    <TagInput
                        onChange={values => {
                            console.log(values);
                            const edit = {
                                moves: values,
                            };
                            this.props.editPokemon &&
                                this.props.editPokemon(edit, this.props.selectedId);
                            this.props.selectPokemon &&
                                this.props.selectPokemon(edit, this.props.selectedId);
                        }}
                        // onInputChange={(e:any) => {
                        //     const edit = {
                        //         moves: e.target.value
                        //     };
                        //     this.props.editPokemon && this.props.editPokemon(edit, this.props.selectedId);
                        //     this.props.selectPokemon && this.props.selectPokemon(edit, this.props.selectedId);
                        // }}
                        values={value || []}
                    />
                </ErrorBoundary>
            );
        }
        if (type === 'text') {
            return (
                <input
                    onChange={event => this.onChange(event, inputName)}
                    type={type}
                    name={inputName}
                    value={value}
                    placeholder={placeholder}
                />
            );
        }
        if (type === 'select') {
            return (
                <div className='pt-select'>
                    <select
                        onChange={event => this.onChange(event, inputName)}
                        value={value}
                        name={inputName}>
                        {options
                            ? options.map((item, index) => <option key={index}>{item}</option>)
                            : null}
                    </select>
                </div>
            );
        }
        if (type === 'checkbox') {
            return (
                <label className='pt-control pt-checkbox'>
                    <input type={type} name={inputName} defaultChecked={!!value} />
                    <span className='pt-control-indicator' />
                </label>
            );
        }
        if (type === 'double-select') {
            return (
                <span className='double-select-wrapper'>
                    <div className='pt-select'>
                        <select
                            onChange={e => this.onChange(e, inputName, 0, value)}
                            value={value[0] == null ? 'None' : value[0]}
                            name={inputName}>
                            {options
                                ? options.map((item, index) => (
                                      <option value={item} key={index}>
                                          {item}
                                      </option>
                                  ))
                                : null}
                        </select>
                    </div>
                    <span>&nbsp;</span>
                    <div className='pt-select'>
                        <select
                            onChange={e => this.onChange(e, inputName, 1, value)}
                            value={value[1] == null ? 'None' : value[1]}
                            name={inputName}>
                            {options
                                ? options.map((item, index) => (
                                      <option value={item} key={index}>
                                          {item}
                                      </option>
                                  ))
                                : null}
                        </select>
                    </div>
                </span>
            );
        }
        return <div>No input type provided.</div>;
    }

    public render() {
        const { labelName, inputName, type, value, placeholder, options } = this.props;
        return (
            <span className={`current-pokemon-input-wrapper current-pokemon-${inputName}`}>
                <label>{labelName}</label>
                {this.getInput({ labelName, inputName, type, value, placeholder, options })}
            </span>
        );
    }
}

export const CurrentPokemonInput: any = connect(
    (state: any) => ({
        selectedId: state.selectedId,
    }),
    { editPokemon, selectPokemon },
)(CurrentPokemonInputBase as any);
