import * as React from 'react';
import { connect } from 'react-redux';

import {
    matchSpeciesToTypes,
    getMoveType,
    formatBallText,
    typeToColor,
    getContrastColor,
} from 'utils';
import { editPokemon, selectPokemon } from 'actions';

import { ErrorBoundary } from 'components/Shared';

import { TagInput, Classes, TextArea } from '@blueprintjs/core';
import { State } from 'state';
import { Pokemon } from 'models';

import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

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
    options?: string[] | { key: string; value: string }[];
    editPokemon: editPokemon;
    selectedId: string;
    selectPokemon: selectPokemon;
    pokemon?: Pokemon;
    customMoveMap: State['customMoveMap'];
    usesKeyValue?: boolean;
}

export class NotesEditor extends React.Component {
    public constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
    }

    private onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    private onItalicsClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    public render() {
        return (
            <div>
                <button onClick={this.onBoldClick.bind(this)}>Bold</button>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />
            </div>
        );
    }
}

export class CurrentPokemonInputBase extends React.Component<CurrentPokemonInputProps> {
    public constructor(props: CurrentPokemonInputProps) {
        super(props);
    }

    public static defaultProps = {
        disabled: false,
    };

    public onChange = (
        e: React.SyntheticEvent<any> & any,
        inputName: string,
        position?: number,
        value?: any,
        pokemon?: Pokemon,
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
                nickname: 'Egg',
            };
        } else if (inputName === 'forme') {
            edit = {
                forme: e.target.value,
                types: pokemon && matchSpeciesToTypes(pokemon.species, e.target.value),
            };
        } else {
            edit = {
                [inputName]: e.target.value,
            };
        }
        this.props.editPokemon && this.props.editPokemon(edit, this.props.selectedId);
        this.props.selectPokemon && this.props.selectPokemon(this.props.selectedId);
    };

    public getInput({
        labelName,
        transform,
        usesKeyValue,
        disabled,
        inputName,
        type,
        value,
        placeholder,
        options,
        pokemon,
    }: any) {
        const { customMoveMap } = this.props;

        value = value == null ? '' : value;
        if (type === 'moves') {
            return (
                <ErrorBoundary>
                    <TagInput
                        tagProps={(v, i) => {
                            // @TODO: Fix inconsitencies with bad parameter types
                            // @ts-ignore
                            const background =
                                typeToColor(
                                    customMoveMap.find((m) => m?.move === v)?.type ||
                                        getMoveType(v?.toString()?.trim() || ''),
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
                            this.props.editPokemon &&
                                this.props.editPokemon(edit, this.props.selectedId);
                            this.props.selectPokemon &&
                                this.props.selectPokemon(this.props.selectedId);
                        }}
                        values={value || []}
                    />
                </ErrorBoundary>
            );
        }
        if (type === 'text') {
            return (
                <input
                    onChange={(event) => this.onChange(event, inputName)}
                    type={type}
                    name={inputName}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={disabled && `${Classes.DISABLED} ${Classes.TEXT_MUTED}`}
                />
            );
        }
        if (type === 'textArea') {
            return (
                <TextArea
                    onChange={(event) => this.onChange(event, inputName)}
                    name={inputName}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={{ width: '100%' }}
                    className={disabled && `${Classes.DISABLED} ${Classes.TEXT_MUTED} pt-fill`}
                />
            );
        }
        if (type === 'number') {
            return (
                <input
                    onChange={(event) => this.onChange(event, inputName)}
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
                <div className="pt-select" style={inputName === 'status' ? { width: '120px' } : {}}>
                    {inputName === 'pokeball' && value && value !== 'None' ? (
                        <img
                            style={{ position: 'absolute' }}
                            alt={value}
                            src={`icons/pokeball/${formatBallText(value)}.png`}
                        />
                    ) : null}
                    <select
                        onChange={(event) =>
                            this.onChange(event, inputName, undefined, undefined, pokemon)
                        }
                        value={value}
                        style={inputName === 'pokeball' ? { paddingLeft: '2rem' } : {}}
                        name={inputName}
                    >
                        {!usesKeyValue
                            ? options
                                ? options.map((item, index) => <option key={index}>{item}</option>)
                                : null
                            : options.map((item, index) => (
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
                <label className="pt-control pt-checkbox">
                    <input
                        onChange={(e) => this.onChange(e, inputName)}
                        checked={value}
                        type={type}
                        name={inputName}
                    />
                    <span className="pt-control-indicator" />
                </label>
            );
        }
        if (type === 'double-select') {
            return (
                <span className="double-select-wrapper">
                    <div className="pt-select">
                        <select
                            onChange={(e) => this.onChange(e, inputName, 0, value)}
                            value={value[0] == null ? 'None' : value[0]}
                            name={inputName}
                        >
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
                    <div className="pt-select">
                        <select
                            onChange={(e) => this.onChange(e, inputName, 1, value)}
                            value={value[1] == null ? 'None' : value[1]}
                            name={inputName}
                        >
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
            return <NotesEditor />;
        }
        console.log(type);
        return <div>No input type provided.</div>;
    }

    public render() {
        const {
            labelName,
            inputName,
            usesKeyValue,
            type,
            value,
            placeholder,
            options,
            pokemon,
        } = this.props;
        return (
            <span
                className={`current-pokemon-input-wrapper current-pokemon-${type} current-pokemon-${inputName}`}
            >
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
    }),
    { editPokemon, selectPokemon },
)(CurrentPokemonInputBase);
