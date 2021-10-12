import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  let subTitle = <h5>How are you doing today :)</h5>;

  if (user.user.roles[0].name === "manager") {
    subTitle = (
      <h5>
        See how your <strong>Users</strong> are doing today :)
      </h5>
    );
  }
  if (user.user.roles[0].name === "user") {
    subTitle = (
      <h5>
        See how are your <strong>Logs</strong> :)
      </h5>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container p-2 m-3">
      <header className="jumbotron">
        <h3>
          Welcome <strong>{user.user.firstName} </strong>
        </h3>
        {subTitle}
      </header>
    </div>
  );
};

export default Profile;
