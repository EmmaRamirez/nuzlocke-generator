import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { Pokemon } from 'models';
import { connect } from 'react-redux';
import { State } from 'state';

export interface StatsEditorProps {
    pokemon: Pokemon[];
}

export class StatsEditorBase extends React.Component<StatsEditorProps> {
    public render() {
        return <BaseEditor name='Stats'>

        </BaseEditor>;
    }
}

export const StatsEditor = connect(
    (state: State) => ({pokemon: state.pokemon})
)(StatsEditorBase);
