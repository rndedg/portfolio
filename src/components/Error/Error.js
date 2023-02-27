import { Link } from "react-router-dom";
import React from "react";
import "./Error.scss"
function Error() {
  return (
    <div className="Error">
        <div className="error-title">
          
          <Link to="/">
            <h1>Error</h1>
            <p>Something went wrong, try again.</p>
          </Link>
        </div>
    </div>
  );
}

export default Error;
