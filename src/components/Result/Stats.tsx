import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';
import { PokemonIcon } from 'components/PokemonIcon';
import { Layout, LayoutDisplay } from 'components/Layout';

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
        const typeText = (i) => `${sorted[i]?.name} (${sorted[i]?.total} Pokémon)`;
        return `${typeText(0)}, ${typeText(1)}, ${typeText(2)}, ${typeText(3)}, ${typeText(4)}, ${typeText(5)}`;
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
                key === 'to'
            ) {
                return;
            }
            if (wm.hasOwnProperty(key)) {
                wm[key]++;
            } else {
                wm[key] = 1;
            }
        });
        const sorted = Object.keys(wm).map(key => ({name: key, total: wm[key]})).sort((a, b) => b.total - a.total);
        return sorted;
    }

    private getMostCommonDeath() {
        const words = this.props.pokemon.filter(s => s.status === 'Dead').map(p => p.causeOfDeath || '').join('\n');
        const res = this.wordMap(words.split(/\n/));
        const getRes = (i) => `${res[i]?.name} (${res[i]?.total} deaths)`;
        return `${getRes(0)}, ${getRes(1)}, ${getRes(2)}, ${getRes(3)}`;
    }

    private getAverageLevel() {
        const champs = this.props.pokemon.filter(s => s.status === 'Champs');
        const levels = champs.map(p => parseInt(p?.level as any) || 0);
        console.log(levels);
        return levels.reduce((p, c) => p + c, 0) / champs.length;
    }

    public render() {
        return <div className='stats' style={{width: '50%'}}>
            <h3>Stats</h3>

            <div style={{marginTop: '10px', margin: '0 10px'}}>
                <p>Average Level: {this.getAverageLevel().toFixed(0)}</p>
                <p>Most Common Killers: {this.getMostCommonDeath()}</p>
                <p>Most Common Types: {this.getMostCommonType()}</p>
                <p>Shinies: <Layout display={LayoutDisplay.Inline}><PokemonIcon species={'Gyarados'} shiny /><PokemonIcon species='Gastly' shiny /></Layout></p>
                <p>Wipeouts: 1</p>
                <p>Total Time (Completed Games): 348:29</p>
            </div>
        </div>;
    }
}

export const Stats = connect(
    (state: State) => ({
        pokemon: state.pokemon,
    })
)(StatsBase);
