import * as React from 'react';
import { TeamPokemon } from 'components/TeamPokemon/TeamPokemon2';
import { css } from 'emotion';
import { Box, Pokemon } from 'models';
import { useSelector } from 'react-redux';
import { State } from 'state';
import { pokemon } from 'reducers/pokemon';
import { Menu, MenuItem } from '@blueprintjs/core';
import { Layout, LayoutDisplay, LayoutDirection, LayoutAlignment, LayoutSpacing, LayoutWrap } from 'components/Layout';
import { BoxedPokemon } from 'components/BoxedPokemon/BoxedPokemon2';
import { ChampsPokemonView } from 'components/ChampsPokemon';
import { DeadPokemon } from 'components/DeadPokemon/DeadPokemon2';


const getAllByStatus = (boxes?: Box[], pokemon?: Pokemon[], status?: string) => {
    const boxesByStatus = boxes?.filter(box => {
        return box.name.toLowerCase() === status?.toLowerCase() ||
            box?.inheritFrom?.toLowerCase() === status?.toLowerCase();
    }).map(box => box.name);
    const pokemonByStatus = pokemon
        ?.filter(poke => !poke.hidden && boxesByStatus?.includes(poke.status ?? ''));

    return pokemonByStatus;
};

export interface DisplayProps {
    display?: LayoutDisplay;
    direction?: LayoutDirection;
    alignment?: LayoutAlignment;
    spacing?: LayoutSpacing;
}

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

    const onOutsideClick = (event: MouseEvent) => {
        setShowContext(false);
        return;
    };

    React.useEffect(() => {
        window.addEventListener('click', onOutsideClick);
        //window.addEventListener('contextmenu', onOutsideClick);
        () => {
            window.removeEventListener('click', onOutsideClick);
            //window.removeEventListener('contextmenu', onOutsideClick);
        };
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
            outline: '3px solid #58e3f5',
            filter: 'drop-shadow(0 0 0 2px rgba(0,0,0,0.2)'
        })
    }} onContextMenu={onContextMenu}>
        {showContext && renderMenu}
        <TeamPokemon options={{
        }} pokemon={pokemon} />
    </div>;
}

export type ViewProps = Partial<Pick<State, 'pokemon'>> & DisplayProps;

export function TeamPokemonView({
    pokemon,
    display,
    direction,
    alignment,
    spacing,
}: ViewProps) {
    return <Layout display={display} direction={direction} alignment={alignment} spacing={spacing} wrap={LayoutWrap.NoWrap}>
        {pokemon?.map(poke => <TeamPokemonMemberView key={poke.id} pokemon={poke} />)}
    </Layout>;
}

export function BoxedPokemonView({
    pokemon,
    display,
    direction,
    alignment,
    spacing,
}: ViewProps) {
    return <Layout display={display} direction={direction} alignment={alignment} spacing={spacing}>
        {pokemon?.map(poke => <BoxedPokemon key={poke.id} pokemon={poke} />)}
    </Layout>;
}

export function DeadPokemonView({
    pokemon,
    display,
    direction,
    alignment,
    spacing,
}: ViewProps) {
    return <Layout display={display} direction={direction} alignment={alignment} spacing={spacing}>
        {pokemon?.map(poke => <DeadPokemon key={poke.id} pokemon={poke} />)}
    </Layout>;
}


export function Result() {
    const [downloadStatus, setDownloadStatus] = React.useState(DownloadStatus.dormant);
    const [scale, setScale] = React.useState(1);
    const [srollY, setScrollY] = React.useState(0);
    const pokemon = useSelector<State, State['pokemon']>(state => state.pokemon);
    const style = useSelector<State, State['style']>(state => state.style);
    const boxes = useSelector<State, State['box']>(state => state.box);
    const {bgColor} = style;

    const scrollToScale = (event) => {
        console.log(
            scrollY - window.scrollY
        );
        setScrollY(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', scrollToScale);
        return () => window.removeEventListener('scroll', scrollToScale);
    });

    return <div data-testid='result' style={{
        margin: '2rem',
        background: bgColor,
        color: '#222',
        width: '48rem',
        overflowY: 'auto',
    }}>
        <TeamPokemonView pokemon={getAllByStatus(boxes, pokemon, 'team')} />
        <BoxedPokemonView spacing={LayoutSpacing.Center} pokemon={getAllByStatus(boxes, pokemon, 'boxed')} />
        <DeadPokemonView spacing={LayoutSpacing.Center} pokemon={getAllByStatus(boxes, pokemon, 'dead')} />
        <ChampsPokemonView spacing={LayoutSpacing.Center} pokemon={getAllByStatus(boxes, pokemon, 'champs')} />
    </div>;
}
