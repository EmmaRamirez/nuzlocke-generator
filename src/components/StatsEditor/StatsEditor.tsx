import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { Pokemon } from 'models';
import { connect } from 'react-redux';
import { State } from 'state';
import { Checkbox, Switch, Button, Intent, Classes } from '@blueprintjs/core';
import { editStyle } from 'actions';

export interface StatsEditorProps {
    pokemon: State['pokemon'];
    style: State['style'];
    editStyle: editStyle;
}

export class StatsEditorBase extends React.Component<StatsEditorProps> {
    public render() {
        const {style, pokemon, editStyle} = this.props;
        const stats = style?.statsOptions;

        return <BaseEditor name='Stats'>

            <div>
                <Checkbox
                    checked={style.displayStats}
                    name='displayStats'
                    label='Display Stats'
                    onChange={(e: any) =>
                        editStyle({[e.target.name]: e.target.checked})
                    }
                />
            </div>
            <ul style={{
                listStyleType: 'none',
                padding: 0,
                marginLeft: '1rem',
                opacity: style.displayStats ? 1 : 0.3,
            }}>
                <li>
                    <Switch
                        checked={stats.averageLevel}
                        name='averageLevel'
                        label='Average Level'
                    />
                </li>

                <li>
                    <Switch
                        checked={stats.mostCommonKillers}
                        name='mostCommonKillers'
                        label='Most Common Killers'
                    />
                </li>

                <li>
                    <Switch
                        checked={stats.mostCommonTypes}
                        name='mostCommonTypes'
                        label='Most Common Types'
                    />
                </li>

                <li>
                    <Switch
                        checked={stats.shiniesCaught}
                        name='shiniesCaught'
                        label='Shinies Caught'
                    />
                </li>

                <li>
                    <label>Custom:</label>
                    <input style={{marginLeft: '4px'}} className={Classes.INPUT} type='text' placeholder='label' />
                    <input style={{marginLeft: '4px'}} className={Classes.INPUT} type='text' placeholder='value' />
                </li>
            </ul>
        </BaseEditor>;
    }
}

export const StatsEditor = connect(
    (state: State) => ({
        pokemon: state.pokemon,
        style: state.style,
    }),
    {
        editStyle,
    }
)(StatsEditorBase);
