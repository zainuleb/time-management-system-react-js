import React, { useState, useEffect } from "react";
import styles from "./AddLog.module.css";
import Button from "../../components/UI/button/Button.js";

//Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { addLog } from "../../redux/actions/logs.actions";
import { clearMessage } from "../../redux/actions/message.actions.js";

const AddLog = () => {
  const [logForm, setLogForm] = useState({
    logDate: "",
    hours: 0,
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const changeHandler = async (e) => {
    await setLogForm({
      ...logForm,
      [e.target.name]: e.target.value,
    });
  };

  //Func for Adding Log
  const submitLogHandler = async (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    dispatch(addLog(user.token, logForm))
      .then(() => {
        setSuccessful(true);
        setLoading(false);
      })
      .catch(() => {
        setSuccessful(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLogForm({});
    dispatch(clearMessage());

    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formTitle}>
        <h2>Add Logs</h2>
      </div>
      <form className={styles.form}>
        {!successful && (
          <div>
            <div className={styles.formInputField}>
              <label>Log Date</label>
              <input
                type="date"
                id="logDate"
                name="logDate"
                onChange={changeHandler}
                value={logForm.logDate}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formInputField}>
              <label>Work Hours</label>
              <input
                type="number"
                min="1"
                id="hours"
                name="hours"
                onChange={changeHandler}
                value={logForm.hours}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formInputField}>
              <label>Description</label>
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="Document your log Here..."
                onChange={changeHandler}
                value={logForm.description}
                className={styles.formInput}
                required
              />
            </div>
            <Button loading={loading} submit={submitLogHandler}>
              Add Log
            </Button>
          </div>
        )}

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddLog;
