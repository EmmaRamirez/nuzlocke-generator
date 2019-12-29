import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';

export interface StatsProps {
    pokemon: State['pokemon'];
}

export class StatsBase extends React.Component<StatsProps, {pokemon: State['pokemon']}> {
    public state = {
        pokemon: [] as State['pokemon'],
    };

    public componentDidMount() {
        const pokemon = this.props.pokemon.filter(p => p.status === 'Champs');
        this.setState({pokemon});
    }

    private typeMap() {
        const typesFreq = {};

        this.state.pokemon.forEach(poke => {
            if (poke && Array.isArray(poke.types)) {

                const type1 = poke.types[0];
                const type2 = poke.types[1];

                console.log(type1, type2);

                if (typesFreq.hasOwnProperty(type1)) {
                    typesFreq[type1]++;
                } else {
                    typesFreq[type1] = 1;
                }


                if (typesFreq.hasOwnProperty(type2)) {
                    if (type1 !== type2) {
                        typesFreq[type2]++;
                    }
                } else {
                    typesFreq[type2] = 1;
                }
            }
        });

        return typesFreq;
    }

    private getMostCommonType() {
        const t = this.typeMap();
        const sorted = Object.keys(t).map(key => ({name: key, total: t[key]})).sort((a, b) => b.total - a.total);
        console.log(t, sorted);
        return `${sorted[0]?.name} (${sorted[0]?.total} Pokémon), ${sorted[1]?.name} (${sorted[1]?.total} Pokémon), ${sorted[2]?.name} (${sorted[2]?.total} Pokémon)`;
    }

    private wordMap(arr) {
        const wm = {};
        arr.forEach(key => {
            if (
                key === 'from' ||
                key === 'the' ||
                key === 'a' ||
                key === 'on' ||
                key === 'up' ||
                key === 'with' ||
                key === 'to' ||
                key === 'Arm' ||
                key === 'Thrust'
            ) {
                return;
            }
            if (wm.hasOwnProperty(key)) {
                wm[key]++;
            } else {
                wm[key] = 1;
            }
        });
        console.log(wm);
        const sorted = Object.keys(wm).map(key => ({name: key, total: wm[key]})).sort((a, b) => b.total - a.total);
        console.log(sorted);
        return sorted;
    }

    private getMostCommonDeath() {
        const words = this.props.pokemon.filter(s => s.status === 'Dead').map(p => p.causeOfDeath || '').join(' ');
        console.log('words', words);
        const res = this.wordMap(words.split(/\s/));
        return `${res[0]?.name} (${res[0]?.total} deaths), ${res[1]?.name} (${res[1]?.total}), ${res[2]?.name} (${res[2]?.total})`;
    }

    private getAverageLevel() {
        const champs = this.props.pokemon.filter(s => s.status === 'Champs');
        // @ts-ignore
        const levels = champs.map(p => parseInt(p.level || '0'));
        console.log(levels);
        return levels.reduce((p, c) => p + c, 0) / champs.length;
    }

    public render() {
        return <div className='stats' style={{width: '50%'}}>
            <h3>Stats</h3>

            <p>Average Level: {this.getAverageLevel().toFixed(0)}</p>
            <p>Most Common Deaths: {this.getMostCommonDeath()}</p>
            <p>Most Common Types: {this.getMostCommonType()}</p>
        </div>;
    }
}

export const Stats = connect(
    (state: State) => ({
        pokemon: state.pokemon,
    })
)(StatsBase);
