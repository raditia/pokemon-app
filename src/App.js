import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import config from "./config";

import PokemonListPage from "./pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "./pages/PokemonDetailPage/PokemonDetailPage";
import MyPokemonPage from "./pages/MyPokemonPage/MyPokemonPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={config.app.pages.list}>
            <PokemonListPage />
          </Route>
          <Route path={config.app.pages.detail}>
            <PokemonDetailPage />
          </Route>
          <Route path={config.app.pages.my_pokemon}>
            <MyPokemonPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
