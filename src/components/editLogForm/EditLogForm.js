import React, { useState, useEffect } from "react";
import Button from "../UI/button/Button.js";
import { useDispatch, useSelector } from "react-redux";
import { updateLog } from "../../redux/actions/logs.actions";
import { clearMessage } from "../../redux/actions/message.actions";

const EditLogForm = ({ id, logs, user }) => {
  let dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const { message } = useSelector((state) => state.message);
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
      console.log(logsData);
      // eslint-disable-next-line
      setUserId(logsData.user_id);
      setLogForm({
        logDate: logsData.logDate,
        hours: logsData.hours,
        description: logsData.description,
      });
    }
    // eslint-disable-next-line
  }, [logs]);

  const changeHandler = async (e) => {
    await setLogForm({
      ...logForm,
      [e.target.name]: e.target.value,
    });
  };

  const refreshMessage = () => {
    dispatch(clearMessage());
  };
  const submitUpdateHandler = async (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    dispatch(updateLog(id, userId, logForm, user.token))
      .then(() => {
        setSuccessful(true);
        setLoading(false);
        refreshMessage();
      })
      .catch(() => {
        setSuccessful(false);
        setLoading(false);
      });
  };

  return (
    <div className="unix-login">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="login-content">
              <div className="login-form">
                <h4>Update Log</h4>
                <form>
                  {!successful && (
                    <div>
                      <div className="form-group">
                        <label>Log Date</label>
                        <input
                          type="date"
                          id="logDate"
                          name="logDate"
                          onChange={changeHandler}
                          value={logForm.logDate}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Work Hours</label>
                        <input
                          type="number"
                          min="1"
                          id="hours"
                          name="hours"
                          onChange={changeHandler}
                          value={logForm.hours}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <input
                          type="text"
                          id="description"
                          name="description"
                          placeholder="Document your log Here..."
                          onChange={changeHandler}
                          value={logForm.description}
                          className="form-control"
                        />
                      </div>
                      <Button loading={loading} submit={submitUpdateHandler}>
                        Add Log
                      </Button>
                    </div>
                  )}
                  {message && (
                    <div classNameName="form-group">
                      <div
                        classNameName={
                          successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {message}
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLogForm;
