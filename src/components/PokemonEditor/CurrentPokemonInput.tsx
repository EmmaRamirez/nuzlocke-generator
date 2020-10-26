import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

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
import { cx } from 'emotion';
import { useDebounceCallback } from '@react-hook/debounce';
import { select } from 'redux-saga/effects';

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
    pokemon?: Pokemon;
    usesKeyValue?: boolean;
}

// selectedId: state.selectedId,
//         customMoveMap: state.customMoveMap,
//         customTypes: state.customTypes,
//     }),
//     { editPokemon, selectPokemon },

interface ChangeArgs {
    inputName: CurrentPokemonInputProps['inputName'];
    position?: number;
    value?: any;
    pokemon?: Pokemon;
}

const onChange = ({inputName, position, value, pokemon}: ChangeArgs) => (e: React.ChangeEvent & { target: { value: any; checked?: boolean } }) => {
    const t0 = performance.now();
    e.persist();
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
    const t1 = performance.now();
    console.log(t1 - t0);
};

export type InputTypesFromState = Partial<Pick<State, 'selectedId' | 'customMoveMap' | 'customTypes'>>;
export type InputTypesFromActions = {};

export function PokemonTextInput ({inputName, type, value, placeholder, disabled, selectedId}: CurrentPokemonInputProps & InputTypesFromState) {
    const [edit, setEdit] = React.useState({[inputName]: value});

    if (!selectedId) {
        return null;
    }
    const dispatch = useDispatch();
    //const commitEdit = dispatch(editPokemon(edit, selectedId));
    const onChange = useDebounceCallback(() => dispatch(editPokemon(edit, selectedId)), 300);

    React.useEffect(() => setEdit({[inputName]: value}), [inputName, value]);

    return <input
        onChange={onChange}
        onInput={e => setEdit({ [inputName]: e.currentTarget.value })}
        type={type}
        name={inputName}
        value={edit[inputName]}
        placeholder={placeholder}
        disabled={disabled}
        className={disabled ? `${Classes.DISABLED} ${Classes.TEXT_MUTED}` : ''}
    />;
}

export function CurrentPokemonInput (props: CurrentPokemonInputProps) {
    const selectedId = useSelector<State, State['selectedId']>(state => state.selectedId);
    const customMoveMap = useSelector<State, State['customMoveMap']>(state => state.customMoveMap);
    const customTypes = useSelector<State, State['customTypes']>(state => state.customTypes);
    const dispatch = useDispatch();

    return <span
        className={`current-pokemon-input-wrapper current-pokemon-${props.type} current-pokemon-${props.inputName}`}>
        <label>{props.labelName}</label>
        {getInput({ ...props, selectedId })}
    </span>;

}

export function getInput (props: Parameters<typeof PokemonTextInput>[0]) {
    switch (props.type) {
        case 'text':
            return <PokemonTextInput {...props} />;
        default:
            return 'No input for this type exists.';
    }
}


//         value = value ?? '';
//         if (type === 'moves') {
//             return (
//                 <ErrorBoundary>
//                     <TagInput
//                         fill
//                         leftIcon="ninja"
//                         tagProps={(v, i) => {
//                             // @TODO: Fix inconsitencies with bad parameter types
//                             const background =
//                                 typeToColor(
//                                     // @ts-ignore
//                                     customMoveMap.find((m) => m?.move === v)?.type ||
//                                         getMoveType(v?.toString()?.trim() || ''),
//                                     customTypes,
//                                 ) || 'transparent';
//                             const color = getContrastColor(background);
//                             return {
//                                 style: {
//                                     background,
//                                     color,
//                                 },
//                             };
//                         }}
//                         onChange={(values) => {
//                             const edit = {
//                                 moves: values,
//                             };
//                             this.props.editPokemon(edit, this.props.selectedId);
//                         }}
//                         values={value || []}
//                     />
//                 </ErrorBoundary>
//             );
//         }
//         if (type === 'text') {
//             return (
//                 <input
//                     onChange={this.onChange(inputName)}
//                     type={type}
//                     name={inputName}
//                     value={value}
//                     placeholder={placeholder}
//                     disabled={disabled}
//                     className={disabled ? `${Classes.DISABLED} ${Classes.TEXT_MUTED}` : ''}
//                 />
//             );
//         }
//         if (type === 'textArea') {
//             return (
//                 <TextArea
//                     onChange={this.onChange(inputName)}
//                     name={inputName}
//                     value={value}
//                     placeholder={placeholder}
//                     disabled={disabled}
//                     style={{ width: '100%' }}
//                     className={disabled ? `${Classes.DISABLED} ${Classes.TEXT_MUTED} bp3-fill` : ''}
//                 />
//             );
//         }
//         if (type === 'number') {
//             return (
//                 <input
//                     onChange={this.onChange(inputName)}
//                     type={type}
//                     name={inputName}
//                     value={value}
//                     placeholder={placeholder}
//                     disabled={disabled}
//                 />
//             );
//         }
//         if (type === 'select') {
//             return (
//                 <div
//                     className={Classes.SELECT}
//                     style={inputName === 'status' ? { width: '120px' } : {}}>
//                     {inputName === 'pokeball' && value && value !== 'None' ? (
//                         <img
//                             style={{ position: 'absolute' }}
//                             alt={value}
//                             src={`icons/pokeball/${formatBallText(value)}.png`}
//                         />
//                     ) : null}
//                     <select
//                         onChange={this.onChange(inputName, { pokemon })}
//                         value={value}
//                         style={inputName === 'pokeball' ? { paddingLeft: '2rem' } : {}}
//                         name={inputName}>
//                         {!usesKeyValue
//                             ? options
//                                 ? options.map((item, index) => <option key={index}>{item}</option>)
//                                 : null
//                             : options?.map((item, index) => (
//                                 <option value={item.value} key={index}>
//                                     {item.key}
//                                 </option>
//                             ))}
//                     </select>
//                 </div>
//             );
//         }
//         if (type === 'checkbox') {
//             return (
//                 <label className={cx(Classes.CONTROL, Classes.CHECKBOX)}>
//                     <input
//                         onChange={this.onChange(inputName)}
//                         checked={value}
//                         type={type}
//                         name={inputName}
//                     />
//                     <span className="bp3-control-indicator" />
//                 </label>
//             );
//         }
//         if (type === 'double-select') {
//             return (
//                 <span className="double-select-wrapper">
//                     <div className={Classes.SELECT}>
//                         <select
//                             onChange={this.onChange(inputName, { position: 0, value })}
//                             value={value?.[0] == null ? 'None' : value?.[0]}
//                             name={inputName}>
//                             {options
//                                 ? options.map((item: string, index: number) => (
//                                     <option value={item} key={index}>
//                                         {item}
//                                     </option>
//                                 ))
//                                 : null}
//                         </select>
//                     </div>
//                     <span>&nbsp;</span>
//                     <div className={Classes.SELECT}>
//                         <select
//                             onChange={this.onChange(inputName, { position: 1, value })}
//                             value={value?.[1] == null ? 'None' : value?.[1]}
//                             name={inputName}>
//                             {options
//                                 ? options.map((item, index) => (
//                                     <option value={item} key={index}>
//                                         {item}
//                                     </option>
//                                 ))
//                                 : null}
//                         </select>
//                     </div>
//                 </span>
//             );
//         }
//         if (type === 'rich-text') {
//             return null;
//         }
//         return <div>No input type provided.</div>;
//     }

//     public render() {
//         const {
//             labelName,
//             inputName,
//             usesKeyValue,
//             type,
//             placeholder,
//             value,
//             options,
//             pokemon,
//         } = this.props;

//         return (

//         );
//     }
// }
