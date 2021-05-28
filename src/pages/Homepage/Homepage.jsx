/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { Menu } from "../../components/Menu";

class Homepage extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h4 className="panel-title">Thông tin cá nhân</h4>
            </div>
            <div className="panel-body">
              {/* <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src= {URL}
                    className="img-responsive"
                    alt="Image"
                  />
                </div> */}
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <p>
                  <strong>Tên GV:</strong> {this.props.user.fullName}
                </p>
                <p>
                  <strong>Ngày sinh:</strong> {this.props.user.dateBirth}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {this.props.user.phoneNumber}
                </p>
                <p>
                  <strong>Email:</strong> {this.props.user.email}
                </p>
                <p>
                  <strong>Số CMND:</strong> {this.props.user.soCmnd}
                </p>
                <p>
                  <strong>Ngày cấp:</strong> {this.props.user.ngayCap}
                </p>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <p>
                  <strong>Dân tộc:</strong> {this.props.user.danToc}
                </p>
                <p>
                  <strong>Tôn giáo:</strong> {this.props.user.tonGiao}
                </p>
                <p>
                  <strong>Địa chỉ:</strong> {this.props.user.addRess}
                </p>
              </div>
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
const connectedHomePage = connect(mapStateToProps)(Homepage);

export { connectedHomePage as Homepage };
