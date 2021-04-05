const config = {
  api: {
    basePath: "https://pokeapi.co/api/v2",
    pokemon_list: "/pokemon",
    pokemon_detail: (pokemonName) => `/pokemon/${pokemonName}`,
  },
  app: {
    pages: {
      list: "/list",
      detail: "/detail/:pokemonName",
    },
  },
  getApiPath: (apiPath) => `${config.api.basePath}${apiPath}`,
};

export default config;
