import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{user.user.firstName + "" + user.user.lastName}</strong>{" "}
          Profile
        </h3>
      </header>
    </div>
  );
};

export default Profile;
