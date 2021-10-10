import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, delUser } from "../../redux/actions/users.actions";

import UsersTableUI from "../UI/usersTableUI/UsersTableUI";

const UsersTable = () => {
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    try {
      if (user) {
        dispatch(getUsers(user.token));
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, [user, users]);

  return (
    <Table user={user} users={users} delUser={delUser} dispatch={dispatch} />
  );
};

export default UsersTable;
