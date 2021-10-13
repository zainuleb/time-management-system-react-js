import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Route Imports
import { Route, Switch } from "react-router-dom";
import { ManagerRoutes } from "./routes/ManagerRoutes.routes";
import { UserRoutes } from "./routes/UserRoutes.routes";

//Common Imports
import Register from "./pages/Register";
import Login from "./pages/Login.js";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";

//Manager Imports
import AddUser from "./pages/managerPages/AddUser.js";
import EditForm from "./components/editForm/EditForm.js";

//User Imports
import AddLog from "./pages/userPages/AddLog";
import EditLog from "./pages/userPages/EditLog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />

        {/* Admin Routes */}

        {/* Manager Routes */}
        <ManagerRoutes path="/addUser" exact component={AddUser} />
        <ManagerRoutes path="/editUser/:id" exact component={EditForm} />

        {/* User Routes */}
        <UserRoutes path="/addLog" component={AddLog} />
        <Route path="/updatelog/:id" component={EditLog} />
      </Switch>
    </div>
  );
}

export default App;
