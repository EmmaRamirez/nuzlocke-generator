// return (
//     <div style={{
//         backgroundImage: 'url(./assets/img/frlg-pokemon-bg.png)',
//         width: '360px',
//         height: '240px',
//         position: 'relative',
//         display: 'inline-block',
//         backgroundSize: 'contain',
//         color: '#29292d',
//         fontWeight: 'bold',
//     }}>
//         <div
//             style={{
//                 backgroundImage: getPokemonImage({
//                     customImage: poke.customImage,
//                     forme: poke.forme as any,
//                     species: poke.species,
//                     shiny: poke.shiny,
//                     style: this.props.style,
//                     name: this.props.game.name,
//                 }),
//                 ...(spriteStyle as React.CSSProperties),
//                 backgroundSize: this.props.style.teamImages === 'dream world' ? 'contain' : undefined,
//                 height: '6rem',
//                 width: '6rem',
//                 position: 'absolute',
//                 top: '3rem',
//                 left: '3rem',
//             }}
//         />

//         <div style={{
//             display: 'flex',
//             width: '168px',
//             justifyContent: 'space-evenly',
//             position: 'absolute',
//             top: '1.5rem',
//             left: '0.5rem',
//             color: 'white',
//             textShadow: '-1px 1px 0 #444',
//             fontSize: '120%',
//             letterSpacing: '1px',
//             fontWeight: 'normal',
//         }}>
//             <div style={{}}>
//                 {`Lv${pokemon.level}`}
//             </div>

//             <div style={{

//             }}>
//                 {pokemon.nickname}
//             </div>

//             {GenderElement(pokemon.gender)}

//         </div>



//         <div style={{
//             position: 'absolute',
//             top: '1.75rem',
//             left: '16rem',
//         }}>
//             {(speciesToNumber(pokemon.species) || '???').toString().padStart(3, '0')}
//         </div>

//         <div style={{
//             position: 'absolute',
//             top: '3.25rem',
//             left: '16rem',
//         }}>
//             {pokemon.species}
//         </div>



//         <div style={{
//             position: 'absolute',
//             left: '16rem',
//         }}>
//             {pokemon.item}
//         </div>

//         <div style={{
//             position: 'absolute',
//             bottom: '1.8rem',
//             left: '1rem'
//         }}>
//             <div style={{

//             }}>
//                 {pokemon.nature} nature
//             </div>

//             <div style={{

//             }}>
//                 Met in {poke.met} at lv.{poke.metLevel}
//             </div>
//         </div>



//     </div>
// );
