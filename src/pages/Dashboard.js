import React from "react";
import Profile from "../components/profile/Profile";
import UsersTable from "../components/usersTable/UsersTable.js";

const Dashboard = () => {
  return (
    <>
      <Profile />
      <div className="w-75 p-3 mx-auto" style={{ backgroundColor: "#eee" }}>
        <UsersTable />
      </div>
    </>
  );
};

export default Dashboard;
