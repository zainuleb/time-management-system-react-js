import React, { useState, useEffect } from "react";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../redux/actions/logs.actions";
import { getUsers, delUser } from "../../redux/actions/users.actions";

import UsersTableUI from "../UI/usersTableUI/UsersTableUI";
import LogsTableUI from "../UI/logTableUI/LogsTableUI";

const UsersTable = () => {
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { logs } = useSelector((state) => state.logs);

  // eslint-disable-next-line
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showManagerDashboard, setShowManagerDashboard] = useState(false);
  const [showUserDashboard, setShowUserDashboard] = useState(false);

  useEffect(() => {
    if (user) {
      let role = user.user.roles[0].name;

      if (role === "manager") {
        setShowManagerDashboard(true);
        dispatch(getUsers(user.token));
      }
      if (role === "admin") {
        setShowAdminDashboard(true);
      }
      if (role === "user") {
        setShowUserDashboard(true);
        dispatch(getLogs(user.user.id, user.token));
      }
    } else {
      setShowManagerDashboard(false);
      setShowAdminDashboard(false);
      setShowUserDashboard(false);
    }
    // eslint-disable-next-line
  }, [user]);

  /*   useEffect(() => {
    dispatch(getUsers(user.token));
    // eslint-disable-next-line
  }, [users]); */

  return (
    <>
      {showManagerDashboard && (
        <UsersTableUI
          user={user}
          users={users}
          delUser={delUser}
          dispatch={dispatch}
        />
      )}

      {showUserDashboard && logs && <LogsTableUI logs={logs} />}
    </>
  );
};

export default UsersTable;
