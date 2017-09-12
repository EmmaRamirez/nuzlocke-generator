import * as React from 'react';

interface CurrentPokemonInputProps {
  labelName: string;
  inputName: string;
  type: string;
  value: any;
  placeholder: string;
}

export class CurrentPokemonInput extends React.Component<CurrentPokemonInputProps, {}> {
  constructor(props:CurrentPokemonInputProps) {
    super(props);
  }

  public render() {
    const { labelName, inputName, type, value, placeholder } = this.props;
    return (
    <span className={`current-pokemon-input-wrapper current-pokemon-${inputName}`}>
      <label>{labelName}</label>
      <input type={type} name={inputName} value={value} placeholder={placeholder} />
    </span>
    );
  }
}