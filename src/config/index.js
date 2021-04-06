const config = {
  api: {
    basePath: "https://pokeapi.co/api/v2",
    imageBasePath: "https://pokeres.bastionbot.org",
    pokemon_list: "/pokemon",
    pokemon_detail: (pokemonName) => `/pokemon/${pokemonName}`,
    pokemon_image: (pokemonId) => `/images/pokemon/${pokemonId}.png`,
  },
  app: {
    pages: {
      list: "/list",
      detail: "/detail/:pokemonName",
    },
  },
  getApiPath: (apiPath) => `${config.api.basePath}${apiPath}`,
  getApiImagePath: (apiPath) => `${config.api.imageBasePath}${apiPath}`,
};

export default config;
