import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import { Information } from "../components/Information";
class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }
  render() {
    const { user, users } = this.props;
    return (
      // <div className="col-md-6 col-md-offset-3">
      //     <h1>Hi {user.firstName}!</h1>
      //     <p>You're logged in with React & JWT!!</p>
      //     <h3>Users from secure api end point:</h3>
      //     {users.loading && <em>Loading users...</em>}
      //     {users.error && <span className="text-danger">ERROR: {users.error}</span>}
      //     {users.items &&
      //         <ul>
      //             {users.items.map((user, index) =>
      //                 <li key={user.id}>
      //                     {user.firstName + ' ' + user.lastName}
      //                 </li>
      //             )}
      //         </ul>
      //     }
      //     <p>
      //         <Link to="/login">Logout</Link>
      //     </p>
      // </div>
      <div className="row">
       <Information/>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
       
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h4 className="panel-title">Thông tin cá nhân</h4>
              </div>
              <div className="panel-body">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src="http://www.iconarchive.com/icons/iconscity/flags/256/vietnam-icon.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                  <p>12233</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Panel Title</h3>
              </div>
              <div className="panel-body">Panel content</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
