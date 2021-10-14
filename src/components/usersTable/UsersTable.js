import React, { useState, useEffect } from "react";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../redux/actions/logs.actions";
import { getUsers, delUser } from "../../redux/actions/users.actions";

import UsersTableUI from "../UI/usersTableUI/UsersTableUI";
import LogsTableUI from "../UI/logTableUI/LogsTableUI";

const UsersTable = () => {
  let dispatch = useDispatch();

  //Selectors from Redux
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const { logs } = useSelector((state) => state.logs);

  //States Initialized
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showManagerDashboard, setShowManagerDashboard] = useState(false);
  const [showUserDashboard, setShowUserDashboard] = useState(false);

  //Side Effects
  useEffect(() => {
    if (user) {
      let role = user.user.roles[0].name;

      if (role === "manager") {
        setShowManagerDashboard(true);
        dispatch(getUsers(user.token));
      }
      if (role === "admin") {
        setShowAdminDashboard(true);
        dispatch(getUsers(user.token));
        dispatch(getLogs(user.user.id, user.token));
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

  return (
    <div>
      {user && users && showAdminDashboard && (
        <UsersTableUI
          user={user}
          users={users.data}
          usersListing={users}
          workingHours={user.user.working_hours}
          logs={logs}
          dispatch={dispatch}
        />
      )}
      {users && showManagerDashboard && (
        <UsersTableUI
          user={user}
          users={users.data}
          usersListing={users}
          delUser={delUser}
          dispatch={dispatch}
        />
      )}
      {showUserDashboard && logs && (
        <LogsTableUI workingHours={user.user.working_hours} logs={logs} />
      )}
    </div>
  );
};

export default UsersTable;
