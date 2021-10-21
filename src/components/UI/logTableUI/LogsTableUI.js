import React, { useState } from "react";
import WorkingHourModal from "../workingHourModal/WorkingHourModal";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

import * as Icon from "react-bootstrap-icons";
import { Modal } from "react-bootstrap";

const LogsTableUI = ({ workingHours, logs }) => {
  const headers = [
    { label: "Id", key: "id" },
    { label: "Log Date", key: "log_date" },
    { label: "Hours", key: "hours" },
    { label: "Description", key: "description" },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex flex-row-reverse">
        {logs ? (
          <>
          
            <Icon.Clock className="m-3" size={26} onClick={handleShow} />
            <span className="mt-3">Set Work Hours </span>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Set Prefered Working Hours</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <WorkingHourModal handleClose={handleClose} />
              </Modal.Body>
            </Modal>

            <CSVLink
              className="m-3"
              data={logs}
              headers={headers}
              filename="Logs Report.csv"
            >
              Export to CSV
            </CSVLink>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="table-responsive">
        <table className="table text-center table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">Id #</th>
              <th scope="col">Log Date</th>
              <th scope="col">Hours</th>
              <th scope="col">Description</th>
              <th scope="col">Edit Logs</th>
            </tr>
          </thead>
          <tbody>
            {logs ? (
              logs.map((logRow) => {
                const id = logRow.id;
                if (logRow.hours < workingHours) {
                  return (
                    <tr key={logRow.id}>
                      <th scope="row">{logRow.id}</th>
                      <td>{logRow.log_date}</td>
                      <td className="bg-danger text-red">
                        {logRow.hours ? logRow.hours : "-"}
                      </td>
                      <td>{logRow.description}</td>
                      <td>
                        <Link to={`/updatelog/${id}`}>
                          <Icon.Pen color={"white"} size={26} />
                        </Link>
                      </td>
                    </tr>
                  );
                } else
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
    </>
  );
};

export default LogsTableUI;
