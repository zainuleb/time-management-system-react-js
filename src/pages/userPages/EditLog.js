import React from "react";
import EditLogForm from "../../components/editLogForm/EditLogForm.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditLog = () => {
  const { id } = useParams();
  const { logs } = useSelector((state) => state.logs);
  const { user } = useSelector((state) => state.auth);

  return <EditLogForm id={id} logs={logs} user={user} />;
};

export default EditLog;
