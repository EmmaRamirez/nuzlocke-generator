export const imports = {
  'src/components/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-index" */ 'src/components/index.mdx'),
  'src/components/DeletePokemonButton/DeletePokemonButton.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-delete-pokemon-button-delete-pokemon-button" */ 'src/components/DeletePokemonButton/DeletePokemonButton.mdx'),
  'src/components/PokemonIcon/PokemonIcon.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-pokemon-icon-pokemon-icon" */ 'src/components/PokemonIcon/PokemonIcon.mdx'),
  'src/components/Shared/GenderElement.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-shared-gender-element" */ 'src/components/Shared/GenderElement.mdx'),
}
