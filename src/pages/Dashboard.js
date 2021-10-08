import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { manager } = useSelector((state) => state.authentication);

  useEffect(() => {}, [manager]);

  return <div>Welcome to Dashboard Mr. {manager.firstName}</div>;
};

export default Dashboard;
