export function getBadges(name) {
    if (name === 'Red' || name === 'Blue' || name === 'Yellow' || name === 'Green' || name === 'FireRed' || name === 'LeafGreen') {
        return [
            'boulder-badge',
            'cascade-badge',
            'thunder-badge',
            'rainbow-badge',
            'soul-badge',
            'marsh-badge',
            'volcano-badge',
            'earth-badge'
        ];
    }

    if (name === 'Gold' || name === 'Silver' || name === 'Crystal' || name === 'HeartGold' || name === 'SoulSilver') {
        return [
            'zephyr-badge',
            'hive-badge',
            'plain-badge',
            'fog-badge',
            'storm-badge',
            'mineral-badge',
            'glacier-badge',
            'rising-badge',
            'boulder-badge',
            'cascade-badge',
            'thunder-badge',
            'rainbow-badge',
            'soul-badge',
            'marsh-badge',
            'volcano-badge',
            'earth-badge'
        ];
    }

    if (name === 'Ruby' || name === 'Sapphire' || name === 'Emerald' || name === 'AlphaSapphire' || name === 'OmegaRuby') {
        return [
            'stone-badge',
            'knuckle-badge',
            'dynamo-badge',
            'heat-badge',
            'balance-badge',
            'feather-badge',
            'mind-badge',
            'rain-badge'
        ];
    }

    if (name === 'Diamond' || name === 'Pearl' || name === 'Platinum') {
        return [
            'coal-badge',
            'forest-badge',
            'cobble-badge',
            'fen-badge',
            'relic-badge',
            'mine-badge',
            'icicle-badge',
            'beacon-badge'
        ];
    }

    if (name === 'Black' || name === 'White') {
        return [
            'trio-badge',
            'basic-badge',
            'insect-badge',
            'bolt-badge',
            'quake-badge',
            'jet-badge',
            'freeze-badge',
            'legend-badge'
        ];
    }

    if (name === 'Black 2' || name === 'White 2') {
        return [
            'basic-badge',
            'toxic-badge',
            'insect-badge',
            'bolt-badge',
            'quake-badge',
            'jet-badge',
            'legend-badge',
            'wave-badge'
        ];
    }

    if (name === 'X' || name === 'Y') {
        return [
            'bug-badge',
            'cliff-badge',
            'rumble-badge',
            'plant-badge',
            'voltage-badge',
            'fairy-badge',
            'psychic-badge',
            'iceberg-badge'
        ];
    }

    if (name === 'Sun' || name === 'Moon') {
        return [
            'normalium-z',
            'fightium-z',
            'waterium-z',
            'firium-z',
            'grassium-z',
            'rockium-z',
            'electrium-z',
            'ghostium-z',
            'darkinium-z',
            'dragonium-z',
            'groundium-z',
        ];
    }

    if (name === 'Ultra Sun' || name === 'Ultra Moon') {
        return [
            'normalium-z',
            'fightium-z',
            'waterium-z',
            'firium-z',
            'grassium-z',
            'rockium-z',
            'electrium-z',
            'ghostium-z',
            'darkinium-z',
            'dragonium-z',
            'fairium-z',
            'groundium-z',
        ];
    }

    return [];
}