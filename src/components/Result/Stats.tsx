import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';

export interface StatsProps {
    pokemon: State['pokemon'];
}

export class StatsBase extends React.Component<StatsProps> {

    private getMostCommonType() {
        const typesFreq = {};

        return this.props.pokemon.forEach(poke => {
            if (poke.status === 'Champs') {
                if (poke.types) typesFreq[poke.types[0]] = typesFreq[poke.types[0]]++;
                if (poke.types) typesFreq[poke.types[1]] = typesFreq[poke.types[1]]++;
            }
        });
    }

    public render() {
        return <div>

        </div>;
    }
}

export const Stats = connect(
    (state: State) => ({
        pokemon: state.pokemon,
    })
)(StatsBase);
