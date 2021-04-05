import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PokemonListPage from "./pages/PokemonListPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/list">
            <PokemonListPage />
          </Route>
          <Route path="/detail/:pokemonName">
            <PokemonDetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
