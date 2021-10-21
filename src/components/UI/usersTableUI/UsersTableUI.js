import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";
import { getCurrentPage } from "../../../redux/actions/users.actions";
import { getLogs } from "../../../redux/actions/logs.actions";

const UsersTableUI = ({ user, users, usersListing, delUser, dispatch }) => {
  const headers = [
    { label: "Id", key: "id" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Working Hours", key: "working_hours" },
  ];

  return (
    <div className=" ">
      <div>
        {users ? (
          <CSVLink data={users} headers={headers} filename="Users Report.csv">
            Export to CSV
          </CSVLink>
        ) : (
          ""
        )}
      </div>
      <div className="table-responsive">
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
              <th scope="col">Logs</th>
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
                      {userRow.working_hours ? userRow.working_hours : "-"}
                    </td>
                    <td>
                      <Link to={`/editUser/${id}`}>
                        <Icon.Pen color={"white"} size={26} />
                      </Link>
                    </td>
                    <td
                      onClick={() => dispatch(delUser(userRow.id, user.token))}
                    >
                      <Icon.Trash size={26} />
                    </td>
                    <td
                      onClick={() => dispatch(getLogs(userRow.id, user.token))}
                    >
                      <Link to={`/logs/${id}`}>
                        <Icon.BookHalf color={"white"} size={26} />
                      </Link>
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
          {usersListing.prev_page_url && (
            <Button
              className="btn btn-primary"
              onClick={() =>
                dispatch(getCurrentPage(user.token, usersListing.prev_page_url))
              }
            >
              Previous Page
            </Button>
          )}

          {usersListing.next_page_url && (
            <Button
              className="btn btn-primary p-2 m-2"
              onClick={() =>
                dispatch(getCurrentPage(user.token, usersListing.next_page_url))
              }
            >
              Next Page
            </Button>
          )}
        </table>
      </div>

      <div></div>
    </div>
  );
};

export default UsersTableUI;
