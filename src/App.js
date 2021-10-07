import "./App.css";
import { Route, Switch } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Register} exact />
      </Switch>
    </div>
  );
}

export default App;
