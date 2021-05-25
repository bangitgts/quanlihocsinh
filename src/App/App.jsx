import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { Homepage } from "../pages/Homepage";
import { routes } from "../routes";
import { Manager } from "../pages/Manager";
class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }
  showContent(routes) {
    var result = null;
    if (routes.length > 0) {
      var result = routes.map((route) => {
        return (
          <Route path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return result;
  }

  render() {
    const { alert,user } = this.props;
    return (
      <Router history={history}>
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <div>
              <PrivateRoute exact path="/" component={Homepage} />
              <PrivateRoute exact path="/manager" component={Manager} /> 
              {this.showContent(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { users,alert,authentication } = state;
  const { user } = authentication;
  return {
    alert,
    users,
    user
  };
}

const connectedApp = connect(mapStateToProps,null)(App);
export { connectedApp as App };
