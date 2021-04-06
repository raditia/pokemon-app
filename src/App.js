import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import config from "./config";

import PokemonListPage from "./pages/PokemonListPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
