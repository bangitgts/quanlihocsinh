// import React from 'react';
// class ActionManager extends  React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       id:'',
//       txtName: '',
//       txtPrice: '',
//       chkbStatus: '',
//     }
//   }
//   render() {
//     return (
//       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//         <form onSubmit={this.onSave}>
//           <div className="form-group">
//             <label>Tên Sản Phẩm: </label>
//             <input
//               type="text"
//               className="form-control"
//               name="txtName"
//               onChange={this.onChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Giá: </label>
//             <input
//               type="number"
//               className="form-control"
//               name="txtPrice"
//               onChange={this.onChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Trạng Thái: </label>
//           </div>
//           <div className="checkbox">
//             <label>
//               <input
//                 type="checkbox"
//                 name="chkbStatus"
//                 onChange={this.onChange}
//               />
//               Còn Hàng
//             </label>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Lưu Lại
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
// export default ActionManager;

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../../_actions";
import { Menu } from "../../components/Menu";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Tên Học Sinh: </label>
              <input
                type="text"
                className="form-control"
                name="txtName"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Mã Số Sinh Viên: </label>
              <input
                type="number"
                className="form-control"
                name="txtPrice"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Tài Khoản</label>
              <input
                type="text"
                className="form-control"
                name="txtUsername"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="text"
                className="form-control"
                name="txtUsername"
                onChange={this.onChange}
              />
            </div>

            {/*<div className="form-group">
              <label>Trạng Thái: </label>
            </div>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="chkbStatus"
                  onChange={this.onChange}
                />
                Còn Hàng
              </label>
            </div> */}
            <button type="submit" className="btn btn-primary">
              Lưu Lại
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as ActionManager };
