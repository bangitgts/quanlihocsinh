import React from "react";
import { connect } from "react-redux";

import { userActions } from "../../_actions";
import { Menu } from "../../components/Menu";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nameStudent: "",
      maHs: "",
      ngaySinh: "",
      soDienthoai: "",
      diemTrungBinh: "",
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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      nameStudent: `${this.state.nameStudent}`,
      maHs: `${this.state.maHs}`,
      ngaySinh: `${this.state.ngaySinh}`,
      soDienThoai: `${this.state.soDienthoai}`,
      diemTrungBinh: `${this.state.diemTrungBinh}`,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:3000/data", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("Them thanh cong");
    this.setState({
      id: "",
      nameStudent: "",
      maHs: "",
      ngaySinh: "",
      soDienthoai: "",
      diemTrungBinh: "",
    });

    event.preventDefault();
  }
  render() {
    const { match } = this.props;
    console.log(match);
    //console.log(this.props.match)
    //    const { loggingIn } = this.props;
    //  const { username, password, submitted } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu />
        <a href="/manager">
          <button type="button" class="btn btn-default">
            Trở về
          </button>
        </a>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên Học Sinh:</label>
              <input
                value={this.state.nameStudent}
                type="text"
                className="form-control"
                name="nameStudent"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Mã HS:</label>
              <input
                value={this.state.maHs}
                type="number"
                className="form-control"
                name="maHs"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Ngay Sinh:</label>
              <input
                value={this.state.ngaySinh}
                type="date"
                className="form-control"
                name="ngaySinh"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>SDT</label>
              <input
                value={this.state.soDienthoai}
                type="number"
                className="form-control"
                name="soDienthoai"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>diem TB</label>
              <input
                value={this.state.diemTrungBinh}
                type="number"
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
