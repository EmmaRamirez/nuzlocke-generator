import * as React from 'react';
import { Classes } from '@blueprintjs/core';
import * as css from './styles';
import { cx } from 'emotion';
import { head, last } from 'ramda';

export interface CSSUnitInputProps {
    name: string;
    value: any;
    onChange: (e?: any) => void;
    allowedUnits?: string[];
}

export interface CSSUnitInputState {
    chosenUnit: string;
    chosenNumber: number;
}

export const splitValue = (value: string) => {
    const value1 = value.split(/\D/g);
    const value2 = value.split(/\d/g);
    return {
        num: head(value1),
        unit: last(value2),
    };
};

export class CSSUnitInput extends React.Component<CSSUnitInputProps, CSSUnitInputState> {
    public defaultProps = {
        allowedUnits: ['px', 'cm', 'mm', 'in', 'pt', 'pc', 'em', 'rem', 'vw', 'vh', '%'],
    };

    public static getDerivedStateFromProps(props) {
        const { name, value, allowedUnits } = props;
        const { unit, num } = splitValue(value);
        return {
            chosenNumber: num,
            chosenUnit: unit,
        };
    }

    private setUnit = (e) => {
        this.setState({ chosenUnit: e.target.value });
        this.onChange();
    };

    private setNumber = (e) => {
        this.setState({ chosenNumber: e.target.value });
    };

    private onChange = () => {
        const { chosenUnit, chosenNumber } = this.state;
        this.props.onChange({
            target: {
                value: `${chosenNumber}${chosenUnit}`,
            },
        });
    };

    public render() {
        const { name, value, allowedUnits } = this.props;
        const { chosenUnit, chosenNumber } = this.state;
        const { unit, num } = splitValue(value);

        const units = ['px', 'cm', 'mm', 'in', 'pt', 'pc', 'em', 'rem', 'vw', 'vh', '%'];

        console.log(unit, num);

        return (
            <div className={cx(css.componentOption, css.cssUnit)}>
                <label className={Classes.LABEL}>{name}</label>
                <input
                    className={cx(Classes.INPUT, css.unitInput)}
                    name={name}
                    onChange={this.setNumber}
                    type="number"
                    value={chosenNumber}
                />
                <div className={cx(Classes.SELECT, css.unitSelect)}>
                    <select onChange={this.setUnit} value={chosenUnit}>
                        {units?.map((u) => (
                            <option key={u} value={u}>
                                {u}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}
