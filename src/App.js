import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login.js";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser.js";
import EditForm from "./components/editForm/EditForm.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />

        {/* User Routes */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/addUser" component={AddUser} />
        <Route path="/editUser/:id" component={EditForm} />
      </Switch>
    </div>
  );
}

export default App;
