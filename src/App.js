import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login.js";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import GetUsers from "./components/users/getUsers/GetUsers";
import AddUser from "./components/users/addUsers/AddUser";
import EditForm from "./components/UI/editForm/EditForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/showUsers" component={GetUsers} />
        <Route path="/addUser" component={AddUser} />
        <Route path="/editUser/:id" component={EditForm} />
      </Switch>
    </div>
  );
}

export default App;
