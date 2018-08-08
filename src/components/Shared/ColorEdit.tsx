import * as React from 'react';
import * as Styles from 'components/StyleEditor/styles';
import { cx } from 'emotion';

export const ColorEdit = ({ value, onChange, name }) => {
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
                className='color-text-input'
                name={name}
                value={value}
            />
        </div>
    );
};
