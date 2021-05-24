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
                  <p>{user.id}</p>
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
