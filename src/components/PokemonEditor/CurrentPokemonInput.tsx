import * as React from 'react';
import { connect } from 'react-redux';

import {
    matchSpeciesToTypes,
    getMoveType,
    formatBallText,
    typeToColor,
    getContrastColor,
    matchNatureToToxtricityForme,
} from 'utils';
import { editPokemon, selectPokemon } from 'actions';

import { ErrorBoundary } from 'components/Shared';

import { TagInput, Classes, TextArea } from '@blueprintjs/core';
import { State } from 'state';
import { Pokemon } from 'models';

interface CurrentPokemonInputProps {
    labelName: string;
    inputName: string;
    type:
    | 'number'
    | 'text'
    | 'select'
    | 'checkbox'
    | 'double-select'
    | 'moves'
    | 'textArea'
    | 'rich-text';
    value: any;
    placeholder?: string;
    transform?: (v: any) => string;
    disabled?: boolean;
    options?: string[] | { key: string; value: string | null }[];
    editPokemon: editPokemon;
    selectedId: string;
    selectPokemon: selectPokemon;
    pokemon?: Pokemon;
    customMoveMap: State['customMoveMap'];
    usesKeyValue?: boolean;
    customTypes: State['customTypes'];
}

export class CurrentPokemonTextInputBase extends React.PureComponent<Omit<CurrentPokemonInputProps, 'customMoveMap' | 'customTypes'>> {
    public onChange = (inputName) => (e) => {
        this.props.editPokemon({
            [inputName]: e.target.value,
        }, this.props.selectedId);
    };

    public render() {
        const {
            inputName,
            type,
            value,
            placeholder,
            disabled,
        } = this.props;

        return <input
            onChange={this.onChange(inputName)}
            type={type}
            name={inputName}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            className={disabled ? `${Classes.DISABLED} ${Classes.TEXT_MUTED}` : ''}
        />;
    }

}

export const CurrentPokemonTextInput = connect(
    (state: Pick<State, keyof State>) => ({
        selectedId: state.selectedId,
    }),
    { editPokemon },
)(CurrentPokemonTextInputBase);



export class CurrentPokemonInputBase extends React.PureComponent<CurrentPokemonInputProps> {
    public constructor(props: CurrentPokemonInputProps) {
        super(props);
    }

    public static defaultProps = {
        disabled: false,
    };

    public onChange = (inputName, {position, value, pokemon}: {position?: number, value?: any, pokemon?: Pokemon} = {}) => (
        e: React.ChangeEvent & {target: {value: any, checked?: boolean}},
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
        } else if (inputName === 'nature' && pokemon?.species === 'Toxtricity') {
            edit = {
                [inputName]: e.target.value,
                forme: matchNatureToToxtricityForme(e.target.value),
            };
        } else if (inputName === 'moves') {
            edit = {
                [inputName]: e.target.value,
            };
        } else if (
            inputName === 'champion' ||
            inputName === 'shiny' ||
            inputName === 'hidden' ||
            inputName === 'mvp'
        ) {
            edit = {
                [inputName]: e.target.checked,
            };
        } else if (inputName === 'egg') {
            edit = {
                [inputName]: e.target.checked,
            };
        } else if (inputName === 'forme') {
            edit = {
                forme: e.target.value,
                types: pokemon && matchSpeciesToTypes(pokemon?.species, e.target.value),
            };
        } else {
            edit = {
                [inputName]: e.target.value,
            };
        }

        //this.setState({value: e.target.value});
        this.props.editPokemon(edit, this.props.selectedId);
    };

    public getInput({
        labelName,
        usesKeyValue,
        disabled,
        inputName,
        type,
        value,
        placeholder,
        options,
        pokemon,
    }: {
        labelName?: CurrentPokemonInputProps['labelName'],
        usesKeyValue?: boolean,
        disabled?: boolean,
        inputName?: CurrentPokemonInputProps['inputName'],
        type: string,
        value: any,
        placeholder?: string,
        options?: any[],
        pokemon?: Pokemon,
    }) {
        const { customMoveMap, customTypes } = this.props;

        value = value == null ? '' : value;
        if (type === 'moves') {
            return (
                <ErrorBoundary>
                    <TagInput
                        leftIcon='ninja'
                        tagProps={(v, i) => {
                            // @TODO: Fix inconsitencies with bad parameter types
                            const background =
                                typeToColor(
                                    // @ts-ignore
                                    customMoveMap.find((m) => m?.move === v)?.type ||
                                        getMoveType(v?.toString()?.trim() || ''), customTypes,
                                ) || 'transparent';
                            const color = getContrastColor(background);
                            return {
                                style: {
                                    background,
                                    color,
                                },
                            };
                        }}
                        onChange={(values) => {
                            const edit = {
                                moves: values,
                            };
                            this.props.editPokemon(edit, this.props.selectedId);
                        }}
                        values={value || []}
                    />
                </ErrorBoundary>
            );
        }
        if (type === 'text') {
            return (
                <input
                    onChange={this.onChange(inputName)}
                    type={type}
                    name={inputName}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={disabled ? `${Classes.DISABLED} ${Classes.TEXT_MUTED}` : ''}
                />
            );
        }
        if (type === 'textArea') {
            return (
                <TextArea
                    onChange={this.onChange(inputName)}
                    name={inputName}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={{ width: '100%' }}
                    className={disabled ? `${Classes.DISABLED} ${Classes.TEXT_MUTED} bp3-fill` : ''}
                />
            );
        }
        if (type === 'number') {
            return (
                <input
                    onChange={this.onChange(inputName)}
                    type={type}
                    name={inputName}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            );
        }
        if (type === 'select') {
            return (
                <div className={Classes.SELECT} style={inputName === 'status' ? { width: '120px' } : {}}>
                    {inputName === 'pokeball' && value && value !== 'None' ? (
                        <img
                            style={{ position: 'absolute' }}
                            alt={value}
                            src={`icons/pokeball/${formatBallText(value)}.png`}
                        />
                    ) : null}
                    <select
                        onChange={this.onChange(inputName, {pokemon})}
                        value={value}
                        style={inputName === 'pokeball' ? { paddingLeft: '2rem' } : {}}
                        name={inputName}>
                        {!usesKeyValue
                            ? options
                                ? options.map((item, index) => <option key={index}>{item}</option>)
                                : null
                            : options?.map((item, index) => (
                                <option value={item.value} key={index}>
                                    {item.key}
                                </option>
                            ))}
                    </select>
                </div>
            );
        }
        if (type === 'checkbox') {
            return (
                <label className="bp3-control bp3-checkbox">
                    <input
                        onChange={this.onChange(inputName)}
                        checked={value}
                        type={type}
                        name={inputName}
                    />
                    <span className="bp3-control-indicator" />
                </label>
            );
        }
        if (type === 'double-select') {
            return (
                <span className="double-select-wrapper">
                    <div className={Classes.SELECT}>
                        <select
                            onChange={this.onChange(inputName, {position: 0, value})}
                            value={value[0] == null ? 'None' : value[0]}
                            name={inputName}>
                            {options
                                ? options.map((item: string, index: number) => (
                                    <option value={item} key={index}>
                                        {item}
                                    </option>
                                ))
                                : null}
                        </select>
                    </div>
                    <span>&nbsp;</span>
                    <div className={Classes.SELECT}>
                        <select
                            onChange={this.onChange(inputName, {position: 1, value})}
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
        if (type === 'rich-text') {
            return null;
        }
        return <div>No input type provided.</div>;
    }

    public render() {
        const {
            labelName,
            inputName,
            usesKeyValue,
            type,
            placeholder,
            value,
            options,
            pokemon,
        } = this.props;

        return (
            <span
                className={`current-pokemon-input-wrapper current-pokemon-${type} current-pokemon-${inputName}`}>
                <label>{labelName}</label>
                {this.getInput({
                    labelName,
                    usesKeyValue,
                    inputName,
                    type,
                    value,
                    placeholder,
                    options,
                    pokemon,
                })}
            </span>
        );
    }
}

export const CurrentPokemonInput = connect(
    (state: Pick<State, keyof State>) => ({
        selectedId: state.selectedId,
        customMoveMap: state.customMoveMap,
        customTypes: state.customTypes,
    }),
    { editPokemon, selectPokemon },
)(CurrentPokemonInputBase);
