import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, delUser } from "../../../redux/actions/users.actions";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const GetUsers = () => {
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

  const editHandler = (e) => {};

  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Working Hours</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users ? (
          users.map((userRow) => {
            const id = userRow.id;

            return (
              <tr key={userRow.id}>
                <th scope="row">{userRow.id}</th>
                <td>{userRow.firstName}</td>
                <td>{userRow.lastName}</td>
                <td>{userRow.email}</td>
                <td>
                  {userRow.working_hours ? userRow.working_hours : "null"}
                </td>
                <td onClick={editHandler}>
                  <Link to={`/editUser/${id}`}>
                    <Icon.Pen size={28} />
                  </Link>
                </td>
                <td onClick={() => dispatch(delUser(userRow.id, user.token))}>
                  <Icon.Trash size={28} />
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>You have no Users Added... Maybe Add One?</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default GetUsers;
