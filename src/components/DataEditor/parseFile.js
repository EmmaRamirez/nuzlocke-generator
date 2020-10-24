onmessage = function(e) {
    console.log('Message received.');

    const computation = e.data.file;

    postMessage(computation);
};







// const reader = new FileReader();
//         const componentState = this.state;

//         reader.readAsArrayBuffer(file);

//         reader.addEventListener('load', async function () {
//             const u = new Uint8Array(this.result as ArrayBuffer);

//             const parsers = await import('parsers');

//             const functionToUse =
//                 componentState.selectedGame === 'RBY'
//                     ? parsers.parseGen1Save(u, 'nuzlocke')
//                     : parsers.parseGen2Save(u, 'nuzlocke');

//             functionToUse
//                 // @ts-ignore
//                 .then((res) => {
//                     res.pokemon = res.pokemon.filter((poke) => poke.species);
//                     const mergedPokemon = componentState.mergeDataMode
//                         ? DataEditorBase.pokeMerge(state.pokemon, res.pokemon)
//                         : res.pokemon;
//                     const data = {
//                         game: DataEditorBase.determineGame(res.isYellow),
//                         pokemon: mergedPokemon,
//                         trainer: res.trainer,
//                     };
//                     const newState = { ...state, ...data };

//                     replaceState(newState);
//                 })
//                 .catch((err) => {
//                     console.error(err);
//                 });
//         });
