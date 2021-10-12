import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLog } from "../src/redux/actions/logs.actions";
import { clearMessage } from "../src/redux/actions/message.actions";
const EditLogForm = ({
  loading,
  successful,
  logForm,
  setLogForm,
  setSuccessful,
  setLoading,
  token,
  logs,
}) => {
  let dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  console.log(logs);

  const changeHandler = async (e) => {
    await setLogForm({
      ...logForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessful(false);
    setLoading(true);
    dispatch(updateLog(logForm, token))
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

  const refreshMessage = () => {
    dispatch(clearMessage());
  };

  return (
    <div class="unix-login">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="login-content">
              <div class="login-logo">
                <a href="index.html">
                  <span>Focus</span>
                </a>
              </div>
              <div class="login-form">
                <h4>Update Log</h4>
                <form>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                    <label class="pull-right">
                      <a href="#">Forgotten Password?</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-flat m-b-30 m-t-30"
                  >
                    Sign in
                  </button>
                  <div class="social-login-content">
                    <div class="social-button">
                      <button
                        type="button"
                        class="btn btn-primary bg-facebook btn-flat btn-addon m-b-10"
                      >
                        <i class="ti-facebook"></i>Sign in with facebook
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary bg-twitter btn-flat btn-addon m-t-10"
                      >
                        <i class="ti-twitter"></i>Sign in with twitter
                      </button>
                    </div>
                  </div>
                  <div class="register-link m-t-15 text-center">
                    <p>
                      Don't have account ? <a href="#"> Sign Up Here</a>
                    </p>
                  </div>
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
