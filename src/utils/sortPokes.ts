export const sortPokes = (a, b) => {
    return a.status === 'Dead' ? a.deathTimestamp - b.deathTimestamp : a.position - b.position;
};

export const sortPokesReverse = (a, b) => {
    return b.position - a.position;
};
