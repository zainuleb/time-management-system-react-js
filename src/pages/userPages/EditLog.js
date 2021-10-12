import React, { useState, useEffect } from "react";
import EditLogForm from "../../components/editForm/EditForm.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditLog = () => {
  const { id } = useParams();
  const { logs } = useSelector((state) => state.logs);
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const [logForm, setLogForm] = useState({
    logDate: "",
    hours: 0,
    description: "",
  });

  useEffect(() => {
    if (logs.length > 0) {
      const logsData = logs.find((log) => {
        return log.id.toString() === id.toString();
      });

      setLogForm({
        logDate: logsData.logDate,
        hours: logsData.hours,
        description: logsData.description,
      });
    }
    // eslint-disable-next-line
  }, [logs]);

  return (
    <EditLogForm
      loading={loading}
      successful={successful}
      logForm={logForm}
      setLogForm={setLogForm}
      setSuccessful={setSuccessful}
      setLoading={setLoading}
      logs={logs}
      token={user.token}
    />
  );
};

export default EditLog;
