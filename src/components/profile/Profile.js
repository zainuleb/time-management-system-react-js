import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container p-2 m-3">
      <header className="jumbotron">
        <h3>
          Welcome <strong>{user.user.firstName} </strong>
        </h3>
        <h5>Look how your users are doing today :)</h5>
      </header>
    </div>
  );
};

export default Profile;
