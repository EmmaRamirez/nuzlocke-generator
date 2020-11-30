import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { Pokemon } from 'models';
import { connect } from 'react-redux';
import { State } from 'state';
import { Checkbox, Switch, Button, Intent, Classes, Icon, InputGroup } from '@blueprintjs/core';
import { editStyle, addStat, deleteStat, editStat } from 'actions';
import { cx } from 'emotion';
import { ErrorBoundary } from 'components';

export interface StatsEditorProps {
    pokemon: State['pokemon'];
    style: State['style'];
    stats: State['stats'];
    editStyle: editStyle;
    addStat: addStat;
    editStat: editStat;
    deleteStat: deleteStat;
}

export class StatsEditorBase extends React.Component<StatsEditorProps> {
    private onChange = (stat: State['stats'][number], use: 'key' | 'value') => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { editStat } = this.props;
        if (!stat?.id || !stat?.key || !stat?.value) return;
        use === 'key'
            ? editStat(stat?.id, e.target.value, stat.value)
            : editStat(stat?.id, stat.key, e.target.value);
    };

    public render() {
        const { style, pokemon, editStyle } = this.props;
        const { addStat, editStat, deleteStat } = this.props;
        const stats = style?.statsOptions;

        return (
            <BaseEditor name="Stats">
                <ErrorBoundary>
                    <div>
                        <Checkbox
                            checked={style.displayStats}
                            name="displayStats"
                            label="Display Stats"
                            onChange={(e: any) => editStyle({ [e.target.name]: e.target.checked })}
                        />
                    </div>
                    <ul
                        style={{
                            listStyleType: 'none',
                            padding: 0,
                            marginLeft: '1rem',
                            opacity: style.displayStats ? 1 : 0.3,
                        }}>
                        <li>
                            <Switch
                                checked={stats?.averageLevel}
                                name="averageLevel"
                                label="Average Level"
                                onChange={(e: any) =>
                                    editStyle({
                                        statsOptions: {
                                            ...stats,
                                            [e.target.name]: e.target.checked,
                                        },
                                    })
                                }
                            />
                        </li>

                        <li>
                            <Switch
                                checked={stats?.mostCommonKillers}
                                name="mostCommonKillers"
                                label="Most Common Killers"
                                onChange={(e: any) =>
                                    editStyle({
                                        statsOptions: {
                                            ...stats,
                                            [e.target.name]: e.target.checked,
                                        },
                                    })
                                }
                            />
                        </li>

                        <li>
                            <Switch
                                checked={stats?.mostCommonTypes}
                                name="mostCommonTypes"
                                label="Most Common Types"
                                onChange={(e: any) =>
                                    editStyle({
                                        statsOptions: {
                                            ...stats,
                                            [e.target.name]: e.target.checked,
                                        },
                                    })
                                }
                            />
                        </li>

                        <li>
                            <Switch
                                checked={stats?.shiniesCaught}
                                name="shiniesCaught"
                                label="Shinies Caught"
                                onChange={(e: any) =>
                                    editStyle({
                                        statsOptions: {
                                            ...stats,
                                            [e.target.name]: e.target.checked,
                                        },
                                    })
                                }
                            />
                        </li>

                        {this.props.stats?.map((stat) => (
                            <li
                                style={{ display: 'flex', alignItems: 'center' }}
                                className={Classes.INPUT_GROUP}
                                key={stat.id}>
                                <input
                                    onChange={this.onChange(stat, 'key')}
                                    style={{ margin: '4px' }}
                                    className={Classes.INPUT}
                                    type="text"
                                    placeholder="custom label"
                                    value={stat.key}
                                />
                                <input
                                    onChange={this.onChange(stat, 'value')}
                                    style={{ margin: '4px' }}
                                    className={Classes.INPUT}
                                    type="text"
                                    placeholder="custom value"
                                    value={stat.value}
                                />
                                <Button
                                    icon="trash"
                                    intent={Intent.DANGER}
                                    style={{ margin: '6px', fontSize: '80%' }}
                                    className={cx(Classes.MINIMAL, Classes.BUTTON)}
                                    onClick={() => stat?.id && deleteStat(stat?.id)}
                                />
                            </li>
                        ))}

                        <li>
                            <Button
                                icon="plus"
                                style={{ margin: '4px', fontSize: '80%' }}
                                onClick={() => addStat({ key: '', value: '' })}
                                intent={Intent.SUCCESS}>
                                Add Custom Stat
                            </Button>
                        </li>
                    </ul>
                </ErrorBoundary>
            </BaseEditor>
        );
    }
}

export const StatsEditor = connect(
    (state: State) => ({
        pokemon: state.pokemon,
        style: state.style,
        stats: state.stats,
    }),
    {
        editStyle,
        addStat,
        deleteStat,
        editStat,
    },
)(StatsEditorBase as any);
