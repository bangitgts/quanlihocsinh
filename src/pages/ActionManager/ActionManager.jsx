import React from "react";
import { connect } from "react-redux";

import { userActions } from "../../_actions";
import { Menu } from "../../components/Menu";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    let i = 3;
    this.state = {
      id: i++,
      nameStudent:"",
      maHs: "",
      ngaySinh: "",
      soDienthoai:"",
      diemTrungBinh: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
  onChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
    
  }
  onSubmit(event) {
    localStorage.setItem('dataGet',JSON.stringify(this.state))
    event.preventDefault();
  }
  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên Học Sinh:</label>
              <input
                type="text"
                className="form-control"
                name="nameStudent"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Mã HS:</label>
              <input
                type="number"
                className="form-control"
                name="maHs"
                onChange={this.onChange}
              />
            </div>
            {/* <div className="form-group">
              <label>Mật khẩu:</label>
              <input
                type="password"
                className="form-control"
                name="txtPassword"
                onChange={this.onChange}
              />
            </div> */}
            <div className="form-group">
              <label>Ngày Sinh</label>
              <input
                type="date"
                className="form-control"
                name="ngaySinh"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Số Điện Thoại</label>
              <input
                type="text"
                className="form-control"
                name="soDienThoai"
                onChange={this.onChange}
              />
            </div>
            {/* <div className="form-group">
              <label>Điểm Toán</label>
              <input
                type="text"
                className="form-control"
                name="txtToan"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Điểm Lý</label>
              <input
                type="text"
                className="form-control"
                name="txtLy"
                onChange={this.onChange}
              />
            </div> */}
            <div className="form-group">
              <label>Điểm TB</label>
              <input
                type="text"
                className="form-control"
                name="diemTrungBinh"
                onChange={this.onChange}
              />
            </div>
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
