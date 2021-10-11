import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../redux/actions/logs.actions";
import { getUsers, delUser } from "../../redux/actions/users.actions";

import UsersTableUI from "../UI/usersTableUI/UsersTableUI";

const UsersTable = () => {
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    try {
      if (user.user.roles[0].name === "manager") {
        dispatch(getUsers(user.token));
      }
      if (user.user.roles[0].name === "users") {
        dispatch(getLogs());
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    dispatch(getUsers(user.token));
  }, [users]);

  return (
    <UsersTableUI
      user={user}
      users={users}
      delUser={delUser}
      dispatch={dispatch}
    />
  );
};

export default UsersTable;
