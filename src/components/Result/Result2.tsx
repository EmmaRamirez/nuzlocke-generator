import * as React from 'react';
import { TeamPokemon } from 'components/TeamPokemon/TeamPokemon2';
import { css } from 'emotion';
import { Box, Pokemon } from 'models';
import { useSelector } from 'react-redux';
import { State } from 'state';
import { pokemon } from 'reducers/pokemon';
import { Menu, MenuItem } from '@blueprintjs/core';

const getAllByStatus = (boxes: Box[], pokemon: Pokemon[], status: string) => {
    const boxesByStatus = boxes.filter(box => {
        return box.name.toLowerCase() === status.toLowerCase() ||
            box?.inheritFrom?.toLowerCase() === status.toLowerCase();
    }).map(box => box.name);
    const pokemonByStatus = pokemon.filter(poke => boxesByStatus.includes(poke.status ?? ''));

    return pokemonByStatus;
};

export enum DownloadStatus {
    dormant = 'dormant',
    active = 'active',
    error = 'error',
    done = 'done',
}

export function DownloadableWrapper() {

}

export function TeamPokemonMemberView({pokemon}:{pokemon: Pokemon}) {

    const [showContext, setShowContext] = React.useState(false);

    const onContextMenu = (event) => {
        event.preventDefault();
        setShowContext(true);
    };

    const onOutsideClick = event => {
        if (event.target.class === 'pokemon-member-wrapper') {
            return false;
        } else {
            setShowContext(false);
            return;
        }
    };

    React.useEffect(() => {
        window.addEventListener('click', onOutsideClick);
        () => window.removeEventListener('click', onOutsideClick);
    });

    const renderMenu = (<Menu style={{
        position: 'absolute',
        top: '70%',
        right: '-1rem',
        zIndex: 200,
        boxShadow: '0 0 .25rem rgba(0,0,0,0.1)'
    }}>
        <MenuItem text='Edit...' />
        <MenuItem onClick={() => setShowContext(false)} text='Delete' />
        <MenuItem onClick={() => setShowContext(false)} text='Cancel' />
    </Menu>);

    return <div className='pokemon-member-wrapper' style={{
        position: 'relative',
        ...(showContext && {
            outline: '3px solid teal',
            filter: 'drop-shadow(0 0 0 2px rgba(0,0,0,0.2)'
        })
    }} onContextMenu={onContextMenu}>
        {showContext && renderMenu}
        <TeamPokemon pokemon={pokemon} />
    </div>;
}

export function TeamPokemonView({pokemon}: Pick<State, 'pokemon'>) {

    return <div >
        {pokemon.map(poke => <TeamPokemonMemberView pokemon={poke} />)}
    </div>;
}

export function Result() {
    const [downloadStatus, setDownloadStatus] = React.useState(DownloadStatus.dormant);
    const [scale, setScale] = React.useState(1);
    const [srollY, setScrollY] = React.useState(0);
    const pokemon = useSelector<State, State['pokemon']>(state => state.pokemon);
    const boxes = useSelector<State, State['box']>(state => state.box);

    const scrollToScale = (event) => {
        console.log(
            scrollY - window.scrollY
        );
        setScrollY(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', scrollToScale);
        return window.removeEventListener('scroll', scrollToScale);
    });

    return <div style={{
        padding: '2rem',
        background: '#fff',
        color: '#222',
    }}>
        <TeamPokemonView pokemon={getAllByStatus(boxes, pokemon, 'team')} />
    </div>;
}
