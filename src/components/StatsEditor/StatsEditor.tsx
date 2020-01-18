import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { Pokemon } from 'models';
import { connect } from 'react-redux';
import { State } from 'state';
import { Checkbox, Button, Intent } from '@blueprintjs/core';

export interface StatsEditorProps {
    pokemon: Pokemon[];
}

export class StatsEditorBase extends React.Component<StatsEditorProps> {
    public render() {
        return <BaseEditor name='Stats'>
            <ul>
                <li>
                    <Checkbox
                        checked={true}
                        name='averageLevel'
                        label='Average Level'
                    />
                </li>

                <li>
                    <input type='text' name='' value='' />
                    <Button intent={Intent.PRIMARY} icon='plus'></Button>
                </li>
            </ul>
        </BaseEditor>;
    }
}

export const StatsEditor = connect(
    (state: State) => ({pokemon: state.pokemon})
)(StatsEditorBase);
