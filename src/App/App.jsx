import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { Homepage } from '../pages/Homepage';
import { Information } from "../components/Information";
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
      var result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }
  render() {
    const { alert } = this.props;
    return (
      <Router history={history}>
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
             
            <div>
            {/* <Information/> */}
              {/* <Route path="/login" exact component={LoginPage} /> */}
                <PrivateRoute exact path="/" component= { Homepage } />
                <PrivateRoute exact path="/manager" component={ Manager } />
              {/* <Route path="" exact component={ NotFoundPage } /> */}
              {this.showContent(routes)}
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
