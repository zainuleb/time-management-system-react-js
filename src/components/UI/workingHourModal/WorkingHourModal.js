import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { useDispatch,useSelector } from "react-redux";
import { patchLog } from "../../../redux/actions/logs.actions";

const WorkingHourModal = ({handleClose}) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.auth)

  const [workingHours, setWorkingHours] = useState(0);

  const changeHandler =  (e) => {
      setWorkingHours(e.target.value)
  };

  const submitHoursHandler = async (e) => {
    e.preventDefault();
    dispatch(patchLog(user.user.id, workingHours, user.token));
  };

  return (
    <>
      <div className="form-group">
        <label>Work Hours</label>
        <input
          type="number"
          id="workingHours"
          name="workingHours"
          onChange={changeHandler}
          value={workingHours}
          className="form-control"
        />
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submitHoursHandler}>
          Add Prefered Working Hours
        </Button>
      </Modal.Footer>
    </>
  );
};

export default WorkingHourModal;
