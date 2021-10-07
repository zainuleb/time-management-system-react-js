import "./App.css";
import { Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login.js";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Register} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
