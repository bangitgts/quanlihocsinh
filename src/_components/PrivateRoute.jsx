import React from "react";
import { Route, Redirect } from "react-router-dom";
import { About } from "../pages/ForStudent";
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")).hocVan === "giaovien" ? (
        <Component {...props} />
      ) : localStorage.getItem("user") &&
        JSON.parse(localStorage.getItem("user")).hocVan === "hocsinh" ? (
        <Route path="/" component={About} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
