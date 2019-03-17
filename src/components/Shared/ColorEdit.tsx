import * as React from 'react';
import * as Styles from 'components/StyleEditor/styles';
import { cx } from 'emotion';
import { connect } from 'react-redux';
import { classWithDarkTheme, Styles as StyleType } from 'utils';

export interface ColorEditProps {
    value?: any;
    onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    name: keyof StyleType;
    style: any;
}

export const ColorEditBase: React.SFC<ColorEditProps> = ({ value, onChange, name, style }) => {
    return (
        <div className={cx(Styles.colorEditWrapper)}>
            <input
                name={name}
                onChange={onChange}
                className={cx(Styles.colorInput)}
                type='color'
                value={value}
            />
            <input
                style={{ border: 'none' }}
                onChange={onChange}
                type='text'
                className={cx(classWithDarkTheme(Styles, 'colorTextInput', style.editorDarkMode))}
                name={name}
                value={value}
            />
        </div>
    );
};

export const ColorEdit: any = connect((state: any) => ({ style: state.style }), null)(
    ColorEditBase as any,
);
