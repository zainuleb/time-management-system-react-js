import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Route Imports
import { Route, Switch } from "react-router-dom";
import { AdminRoutes } from "./routes/Admin.routes";
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
import UserLogs from "./pages/adminPages/UserLogs";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />

        {/* Admin Routes */}
        <AdminRoutes path="/addUser" component={AddUser} />
        <AdminRoutes path="/editUser/:id" component={EditForm} />
        <AdminRoutes path="/addLog" component={AddLog} />
        <AdminRoutes path="/updatelog/:id" component={EditLog} />
        <AdminRoutes path="/logs/:id" component={UserLogs} />

        {/* Manager Routes */}
        <ManagerRoutes path="/addUser" component={AddUser} />
        <Route path="/editUser/:id" component={EditForm} />

        {/* User Routes */}
        <UserRoutes path="/addLog" component={AddLog} />
        <UserRoutes path="/updatelog/:id" component={EditLog} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
