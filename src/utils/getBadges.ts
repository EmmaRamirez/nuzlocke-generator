import { Game } from 'utils';
import { Badge } from 'models';

export function getBadges(name: Game): Badge[] {
    if (
        name === 'Red'              ||
        name === 'Blue'             ||
        name === 'Yellow'           ||
        name === 'Green'            ||
        name === 'FireRed'          ||
        name === 'LeafGreen'        ||
        name === 'Let\'s Go Eevee'  ||
        name === 'Let\'s Go Pikachu'
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
        name === 'Gold'         ||
        name === 'Silver'       ||
        name === 'Crystal'      ||
        name === 'HeartGold'    ||
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

    if (
        name === 'Ruby'             ||
        name === 'Sapphire'         ||
        name === 'Emerald'          ||
        name === 'AlphaSapphire'    ||
        name === 'OmegaRuby'
    ) {
        return [
            { name: 'Stone Badge', image: 'stone-badge' },
            { name: 'Knuckle Badge', image: 'knuckle-badge' },
            { name: 'Dynamo Badge', image: 'dynamo-badge'},
            { name: 'Heat Badge', image: 'heat-badge'},
            { name: 'Balance Badge', image: 'balance-badge'},
            { name: 'Feather Badge', image: 'feather-badge'},
            { name: 'Mind Badge', image: 'mind-badge'},
            { name: 'Rain Badge', image: 'rain-badge'},
        ];
    }

    if (name === 'Diamond' || name === 'Pearl' || name === 'Platinum') {
        return [
            { name: 'Coal Badge', image: 'coal-badge'},
            { name: 'Forest Badge', image: 'forest-badge'},
            { name: 'Cobble Badge', image: 'cobble-badge'},
            { name: 'Fen Badge', image: 'fen-badge'},
            { name: 'Relic Badge', image: 'relic-badge'},
            { name: 'Mine Badge', image: 'mine-badge'},
            { name: 'Icicle Badge', image: 'icicle-badge'},
            { name: 'Beacon Badge', image: 'beacon-badge'},
        ];
    }

    if (name === 'Black' || name === 'White') {
        return [
            { name: 'Trio Badge', image: 'trio-badge'},
            { name: 'Basic Badge', image: 'basic-badge'},
            { name: 'Insect Badge', image: 'insect-badge'},
            { name: 'Bolt Badge', image: 'bolt-badge'},
            { name: 'Quake Badge', image: 'quake-badge'},
            { name: 'Jet Badge', image: 'jet-badge'},
            { name: 'Freeze Badge', image: 'freeze-badge'},
            { name: 'Legend Badge', image: 'legend-badge'},
        ];
    }

    if (name === 'Black 2' || name === 'White 2') {
        return [
            { name: 'Basic Badge', image: 'basic-badge'},
            { name: 'Toxic Badge', image: 'toxic-badge'},
            { name: 'Insect Badge', image: 'insect-badge'},
            { name: 'Bolt Badge', image: 'bolt-badge'},
            { name: 'Quake Badge', image: 'quake-badge'},
            { name: 'Jet Badge', image: 'jet-badge'},
            { name: 'Legend Badge', image: 'legend-badge'},
            { name: 'Wave Badge', image: 'wave-badge'},
        ];
    }

    if (name === 'X' || name === 'Y') {
        return [
            { name: 'Bug Badge', image: 'bug-badge'},
            { name: 'Cliff Badge', image: 'cliff-badge'},
            { name: 'Rumble Badge', image: 'rumble-badge'},
            { name: 'Plant Badge', image: 'plant-badge'},
            { name: 'Voltage Badge', image: 'voltage-badge'},
            { name: 'Fairy Badge', image: 'fairy-badge'},
            { name: 'Psychic Badge', image: 'psychic-badge'},
            { name: 'Iceberg Badge', image: 'iceberg-badge'},
        ];
    }

    if (name === 'Sun' || name === 'Moon') {
        return [
            { name: 'Normalium Z', image: 'normalium-z'},
            { name: 'Fightium Z', image: 'fightium-z'},
            { name: 'Waterium Z', image: 'waterium-z'},
            { name: 'Firium Z', image: 'firium-z'},
            { name: 'Grassium Z', image: 'grassium-z'},
            { name: 'Rockium Z', image: 'rockium-z'},
            { name: 'Electrium Z', image: 'electrium-z'},
            { name: 'Ghostium Z', image: 'ghostium-z'},
            { name: 'Darkinium Z', image: 'darkinium-z'},
            { name: 'Dragonium Z', image: 'dragonium-z'},
            { name: 'Groundium Z', image: 'groundium-z'},
        ];
    }

    if (name === 'Ultra Sun' || name === 'Ultra Moon') {
        return [
            { name: 'Normalium Z', image: 'normalium-z'},
            { name: 'Fightium Z', image: 'fightium-z'},
            { name: 'Waterium Z', image: 'waterium-z'},
            { name: 'Firium Z', image: 'firium-z'},
            { name: 'Grassium Z', image: 'grassium-z'},
            { name: 'Rockium Z', image: 'rockium-z'},
            { name: 'Electrium Z', image: 'electrium-z'},
            { name: 'Ghostium Z', image: 'ghostium-z'},
            { name: 'Darkinium Z', image: 'darkinium-z'},
            { name: 'Dragonium Z', image: 'dragonium-z'},
            { name: 'Fairium Z', image: 'fairium-z'},
            { name: 'Groundium Z', image: 'groundium-z'},
        ];
    }

    return [];
}

export function getAllBadges() {
    return [
        ...getBadges('Gold'),
        { name: 'Champion', image: 'champion-ribbon' },
        ...getBadges('Emerald'),
        { name: 'Hoenn Champion', image: 'hoenn-champion-ribbon' },
        ...getBadges('Platinum'),
        { name: 'Sinnoh Champion', image: 'sinnoh-champion-ribbon' },
        { name: 'Trio Badge', image: 'trio-badge'},
        { name: 'Freeze Badge', image: 'freeze-badge'},
        ...getBadges('Black 2'),
        { name: 'Unova Champion', image: 'unova-champion-ribbon' },
        ...getBadges('X'),
        { name: 'Kalos Champion', image: 'kalos-champion-ribbon' },
        ...getBadges('Ultra Sun'),
        { name: 'Alola Champion', image: 'alola-champion-ribbon' }
    ];
}