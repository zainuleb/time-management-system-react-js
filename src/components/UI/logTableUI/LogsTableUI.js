import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
/* import { Modal } from "react-bootstrap"; */

const LogsTableUI = ({ logs }) => {
  const headers = [
    { label: "Id", key: "id" },
    { label: "Log Date", key: "logDate" },
    { label: "Hours", key: "hours" },
    { label: "Description", key: "description" },
  ];

  return (
    <div>
      <div className="d-flex flex-row-reverse">
        {logs ? (
          <CSVLink data={logs} headers={headers} filename="Logs Report.csv">
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
            <th scope="col">Log Date</th>
            <th scope="col">Hours</th>
            <th scope="col">Description</th>
            <th scope="col">Edit Logs</th>
            <th scope="col">Edit Hours</th>
          </tr>
        </thead>
        <tbody>
          {logs ? (
            logs.map((logRow) => {
              const id = logRow.id;
              return (
                <tr key={logRow.id}>
                  <th scope="row">{logRow.id}</th>
                  <td>{logRow.log_date}</td>
                  <td>{logRow.hours ? logRow.hours : "-"}</td>
                  <td>{logRow.description}</td>
                  <td>
                    <Link to={`/updatelog/${id}`}>
                      <Icon.Pen color={"white"} size={26} />
                    </Link>
                  </td>
                  <td>
                    <Icon.Clock size={26} />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>You have no Logs Added... Maybe Add One?</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LogsTableUI;
