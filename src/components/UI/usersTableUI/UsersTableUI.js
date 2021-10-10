import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const UsersTableUI = ({ user, users, delUser, dispatch }) => {
  return (
    <table className="table text-center table-bordered table-dark">
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
                <td>
                  <Link to={`/editUser/${id}`}>
                    <Icon.Pen color={"white"} size={26} />
                  </Link>
                </td>
                <td onClick={() => dispatch(delUser(userRow.id, user.token))}>
                  <Icon.Trash size={26} />
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

export default UsersTableUI;
