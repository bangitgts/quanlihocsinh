/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";

import { Route, Link} from "react-router-dom";
const menus = [
  {
    name: "HomePage",
    to: "/",
    exact: true,
  }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class MenuForST extends React.Component {
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <nav className="navbar navbar-default" >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
      
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <b className="caret" />
              </a>
              <ul className="dropdown-menu">

                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}
function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}
const connectedMenu = connect(mapStateToProps)(MenuForST);
export { connectedMenu as MenuForST };
