import * as React from 'react';

import { StoreContext, matchSpeciesToTypes } from '../../utils';
import { editPokemon, selectPokemon } from '../../actions';

interface CurrentPokemonInputProps {
  labelName: string;
  inputName: string;
  type: string;
  value: any;
  placeholder?: string;
  options?: string[];
}

@StoreContext
export class CurrentPokemonInput extends React.Component<CurrentPokemonInputProps, {}> {
  constructor(props:CurrentPokemonInputProps) {
    super(props);
  }

  public onChange = (e:React.SyntheticEvent<any> & any, inputName:string, position?:number, value?:any) => {
    let edit;
    if (inputName === 'types' && position != null) {
      edit = {
        [inputName]: value
      };
      edit[inputName][position] = e.target.value;
    } else if (inputName === 'species') {
      edit = {
        [inputName]: e.target.value,
        types: matchSpeciesToTypes(e.target.value)
      };
    } else if (inputName === 'moves') {
      edit = {
        [inputName]: e.target.value.split(',')
      };
    } else {
      edit = {
        [inputName]: e.target.value
      };
    }
    this.context.store.dispatch(editPokemon(edit, this.context.store.getState().selectedId));
    this.context.store.dispatch(selectPokemon(this.context.store.getState().selectedId));
  }

  public getInput({ labelName, inputName, type, value, placeholder, options }:CurrentPokemonInputProps) {
    value = value == null ? '' : value;
    if (type === 'text') {
      return <input onChange={(event) => this.onChange(event, inputName) } type={type} name={inputName} value={value} placeholder={placeholder} />;
    }
    if (type === 'select') {
      return <div className='pt-select'>
        <select onChange={ (event) => this.onChange(event, inputName) } value={value} name={inputName}>
          {
            options ?
            options.map((item, index) => <option key={index}>{item}</option>) :
            null
          }
        </select>
      </div>;
    }
    if (type === 'checkbox') {
      return <label className='pt-control pt-checkbox'>
        <input type={type} name={inputName} defaultChecked={!!value} />
        <span className='pt-control-indicator'></span>
      </label>;
    }
    if (type === 'double-select') {
      return <span className='double-select-wrapper'>
          <div className='pt-select'>
          <select onChange={e => this.onChange(e, inputName, 0, value)} value={value[0] == null ? 'None' : value[0]} name={inputName}>
            {
              options ?
              options.map((item, index) => <option value={item} key={index}>{item}</option>) :
              null
            }
          </select>
        </div>
        <span>&nbsp;</span>
        <div className='pt-select'>
          <select onChange={e => this.onChange(e, inputName, 1, value)} value={value[1] == null ? 'None' : value[1]} name={inputName}>
            {
              options ?
              options.map((item, index) => <option value={item} key={index}>{item}</option>) :
              null
            }
          </select>
        </div>
      </span>;
    }
    return <div>No input type provided.</div>;
  }

  public render() {
    const { labelName, inputName, type, value, placeholder, options } = this.props;
    return (
      <span className={`current-pokemon-input-wrapper current-pokemon-${inputName}`}>
        <label>{labelName}</label>
        { this.getInput({ labelName, inputName, type, value, placeholder, options }) }

      </span>
    );
  }
}