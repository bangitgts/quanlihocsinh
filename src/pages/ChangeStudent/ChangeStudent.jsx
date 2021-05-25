import React from "react";
import { Menu } from "../../components/Menu";
class ChangeStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nameStudent: "",
      maHs: "",
      soDienthoai: "",
      diemTrungBinh: "",
      ngaySinh: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    console.log("Mount lan 1");
    var b = localStorage.getItem("dataId");
    console.log("gia tri b", b);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/data", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const test = JSON.parse(result);
        for (let item of test) {
          if (item.id === b) {
            console.log(item);
            this.setState({
              id: item.id,
              nameStudent: item.nameStudent,
              maHs: item.maHs,
              ngaySinh: item.ngaySinh,
              soDienthoai: item.soDienThoai,
              diemTrungBinh: item.diemTrungBinh,
            });
            console.log("so dien thoai la" + item.soDienthoai);
          }
        }
      })
      .catch((error) => console.log("error", error));
  }
  onChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }
  onSubmit(event) {
    //var pushItem = localStorage.setItem('dataAdd',JSON.stringify(this.state));
    //this.props.onReceive('a');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      nameStudent: this.state.nameStudent,
      maHs: this.state.maHs,
      ngaySinh: this.state.ngaySinh,
      soDienThoai: this.state.soDienthoai,
      diemTrungBinh: this.state.die,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const url = "http://localhost:3000/data/";
    const config = localStorage.getItem("dataId");
    const urlConfig = url + config;
    fetch(urlConfig, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("Sửa thành công");
    event.preventDefault();
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu />
        <a href="/manager">
          <button type="button" class="btn btn-default">
            Trở về
          </button>
        </a>

        <h2>Đang sửa học sinh tên: {this.state.nameStudent}</h2>
        <h2>Mã HS: {this.state.maHs}</h2>
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
                type="text"
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

export { ChangeStudent };
