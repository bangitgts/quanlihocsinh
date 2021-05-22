/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React from "react";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-1 d-block">404</h1>
            <div className="mb-4 lead">
              The page you are looking for was not found.
            </div>
            <Link to="/" className="btn btn-link">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export { NotFoundPage };
