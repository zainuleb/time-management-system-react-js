import React from "react";

const Button = ({ loading, submit, children }) => {
  return (
    <div className="form-group d-flex justify-content-center mt-5 mb-3">
      <button disabled={loading} className="btn btn-primary " onClick={submit}>
        {loading && <span className="spinner-border spinner-border-sm"></span>}
        <span> {children}</span>
      </button>
    </div>
  );
};

export default Button;
