import * as React from 'react';
import * as Styles from 'components/StyleEditor/styles';
import { cx } from 'emotion';
import { connect } from 'react-redux';
import { classWithDarkTheme, Styles as StyleType } from 'utils';
import { State } from 'state';
import { ChromePicker } from 'react-color';
import { Popover, PopoverInteractionKind } from '@blueprintjs/core';

export const rgbaOrHex = (o) =>
    (o.rgb && o.rgb.a && o.rgb.a !== 1
        ? `rgba(${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}, ${o.rgb.a})`
        : o.hex) || o;

export interface ColorEditProps {
    value?: any;
    onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    style: State['style'];
    width?: string;
    onColorChange: (color) => void;
}

export class ColorEditBase extends React.Component<ColorEditProps, { showChromePicker: boolean }> {
    public state = {
        showChromePicker: false,
    };

    public render() {
        const { value, onChange, name, style, width, onColorChange } = this.props;
        return (
            <div className={cx(Styles.colorEditWrapper)}>
                {/*<input
                    name={name}
                    onChange={onChange}
                    className={cx(Styles.colorInput)}
                    type='color'
                    value={value}
                />*/}
                <Popover
                    interactionKind={PopoverInteractionKind.CLICK}
                    content={
                        <ChromePicker
                            color={value}
                            onChangeComplete={(color) => {
                                onColorChange(color);
                            }}
                        />
                    }
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            style={{ border: 'none' }}
                            onChange={onChange}
                            type="text"
                            className={cx(
                                'pt-input',
                                classWithDarkTheme(Styles, 'colorTextInput', style.editorDarkMode),
                            )}
                            name={name}
                            value={rgbaOrHex(value)}
                            onFocus={(e) => this.setState({ showChromePicker: true })}
                            onBlur={(e) => this.setState({ showChromePicker: false })}
                        />
                        <div
                            style={{
                                height: '1rem',
                                width: '1rem',
                                marginLeft: '.5rem',
                                background: value,
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                </Popover>
            </div>
        );
    }
}

export const ColorEdit: React.ComponentClass<Omit<ColorEditProps, 'style'>> = connect(
    (state: State) => ({ style: state.style }),
    null,
)(ColorEditBase as any) as any;
