export interface ThemeDefinition<V extends Record<string, string>> {
  name: string;
  teamPokemon: string;

  variables: {
    [K in keyof V]: {
      type: V[K];
    };
  };
}
