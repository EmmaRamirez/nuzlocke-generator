import { Game } from 'utils';
import { Badge } from 'models';

export function getBadges(name: Game): Badge[] {
    if (
        name === 'Red' ||
        name === 'Blue' ||
        name === 'Yellow' ||
        name === 'Green' ||
        name === 'FireRed' ||
        name === 'LeafGreen'
    ) {
        return [
            { name: 'Boulder Badge', image: 'boulder-badge' },
            { name: 'Cascade Badge', image: 'cascade-badge' },
            { name: 'Thunder Badge', image: 'thunder-badge' },
            { name: 'Rainbow Badge', image: 'rainbow-badge' },
            { name: 'Soul Badge', image: 'soul-badge' },
            { name: 'Marsh Badge', image: 'marsh-badge' },
            { name: 'Volcano Badge', image: 'volcano-badge' },
            { name: 'Earth Badge', image: 'earth-badge' },
        ];
    }

    if (
        name === 'Gold' ||
        name === 'Silver' ||
        name === 'Crystal' ||
        name === 'HeartGold' ||
        name === 'SoulSilver'
    ) {
        return [
            { name: 'Zephyr Badge', image: 'zephyr-badge' },
            { name: 'Hive Badge', image: 'hive-badge' },
            { name: 'Plain Badge', image: 'plain-badge' },
            { name: 'Fog Badge', image: 'fog-badge' },
            { name: 'Storm Badge', image: 'storm-badge' },
            { name: 'Mineral Badge', image: 'mineral-badge' },
            { name: 'Glacier Badge', image: 'glacier-badge' },
            { name: 'Rising Badge', image: 'rising-badge' },
            { name: 'Boulder Badge', image: 'boulder-badge' },
            { name: 'Cascade Badge', image: 'cascade-badge' },
            { name: 'Thunder Badge', image: 'thunder-badge' },
            { name: 'Rainbow Badge', image: 'rainbow-badge' },
            { name: 'Soul Badge', image: 'soul-badge' },
            { name: 'Marsh Badge', image: 'marsh-badge' },
            { name: 'Volcano Badge', image: 'volcano-badge' },
            { name: 'Earth Badge', image: 'earth-badge' },
        ];
    }

    // if (
    //     name === 'Ruby' ||
    //     name === 'Sapphire' ||
    //     name === 'Emerald' ||
    //     name === 'AlphaSapphire' ||
    //     name === 'OmegaRuby'
    // ) {
    //     return [
    //         'stone-badge',
    //         'knuckle-badge',
    //         'dynamo-badge',
    //         'heat-badge',
    //         'balance-badge',
    //         'feather-badge',
    //         'mind-badge',
    //         'rain-badge',
    //     ];
    // }

    // if (name === 'Diamond' || name === 'Pearl' || name === 'Platinum') {
    //     return [
    //         'coal-badge',
    //         'forest-badge',
    //         'cobble-badge',
    //         'fen-badge',
    //         'relic-badge',
    //         'mine-badge',
    //         'icicle-badge',
    //         'beacon-badge',
    //     ];
    // }

    // if (name === 'Black' || name === 'White') {
    //     return [
    //         'trio-badge',
    //         'basic-badge',
    //         'insect-badge',
    //         'bolt-badge',
    //         'quake-badge',
    //         'jet-badge',
    //         'freeze-badge',
    //         'legend-badge',
    //     ];
    // }

    // if (name === 'Black 2' || name === 'White 2') {
    //     return [
    //         'basic-badge',
    //         'toxic-badge',
    //         'insect-badge',
    //         'bolt-badge',
    //         'quake-badge',
    //         'jet-badge',
    //         'legend-badge',
    //         'wave-badge',
    //     ];
    // }

    // if (name === 'X' || name === 'Y') {
    //     return [
    //         'bug-badge',
    //         'cliff-badge',
    //         'rumble-badge',
    //         'plant-badge',
    //         'voltage-badge',
    //         'fairy-badge',
    //         'psychic-badge',
    //         'iceberg-badge',
    //     ];
    // }

    // if (name === 'Sun' || name === 'Moon') {
    //     return [
    //         'normalium-z',
    //         'fightium-z',
    //         'waterium-z',
    //         'firium-z',
    //         'grassium-z',
    //         'rockium-z',
    //         'electrium-z',
    //         'ghostium-z',
    //         'darkinium-z',
    //         'dragonium-z',
    //         'groundium-z',
    //     ];
    // }

    // if (name === 'Ultra Sun' || name === 'Ultra Moon') {
    //     return [
    //         'normalium-z',
    //         'fightium-z',
    //         'waterium-z',
    //         'firium-z',
    //         'grassium-z',
    //         'rockium-z',
    //         'electrium-z',
    //         'ghostium-z',
    //         'darkinium-z',
    //         'dragonium-z',
    //         'fairium-z',
    //         'groundium-z',
    //     ];
    // }

    return [];
}
