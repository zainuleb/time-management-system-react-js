import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const UsersTableUI = ({ user, users, delUser, dispatch }) => {
  const headers = [
    { label: "Id", key: "id" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Working Hours", key: "working_hours" },
  ];

  return (
    <>
      <div className="d-flex flex-row-reverse">
        {users ? (
          <CSVLink data={users} headers={headers} filename="Users Report.csv">
            Export to CSV
          </CSVLink>
        ) : (
          ""
        )}
      </div>

      <table className="table text-center table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Id #</th>
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
                  <td>{userRow.working_hours ? userRow.working_hours : "-"}</td>
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
    </>
  );
};

export default UsersTableUI;
