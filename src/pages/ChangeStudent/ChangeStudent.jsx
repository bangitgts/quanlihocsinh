import React from "react";
import { Menu } from "../../components/Menu";
class ChangeStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nameStudent: "",
      maHs: "",
      ngaySinh: "",
      soDienThoai: "",
      diemToan: "",
      diemLy: "",
      diemVan: "",
      diemHoa: "",
      diemSinh: "",
      diemTin: "",
      diemLichSu: "",
      diemDiaLy: "",
      diemGDCD: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    console.log("Did Mount Change");
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
          if (item.id == b) {
            console.log(item);
            this.setState({
              id: item.id,
              nameStudent: item.nameStudent,
              maHs: item.maHs,
              ngaySinh: item.ngaySinh,
              soDienThoai: item.soDienThoai,
              diemToan: item.diemToan,
              diemLy: item.diemLy,
              diemVan: item.diemVan,
              diemHoa: item.diemHoa,
              diemSinh: item.diemSinh,
              diemTin: item.diemTin,
              diemLichSu: item.diemLichSu,
              diemDiaLy: item.diemDiaLy,
              diemGDCD: item.diemGDCD,
            });
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
  }
  onSubmit(event) {
    //var pushItem = localStorage.setItem('dataAdd',JSON.stringify(this.state));
    //this.props.onReceive('a');
    //const item = this.state;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      id: this.state.id,
      nameStudent: this.state.nameStudent,
      maHs: this.state.maHs,
      ngaySinh: this.state.ngaySinh,
      soDienThoai: this.state.soDienThoai,
      diemToan: this.state.diemToan,
      diemLy: this.state.diemLy,
      diemVan: this.state.diemVan,
      diemHoa: this.state.diemHoa,
      diemSinh: this.state.diemSinh,
      diemTin: this.state.diemTin,
      diemLichSu: this.state.diemLichSu,
      diemDiaLy: this.state.diemDiaLy,
      diemGDCD: this.state.diemGDCD,
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
    alert("S???a th??nh c??ng");
    event.preventDefault();
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu />
        <a href="/manager">
          <button type="button" class="btn btn-default">
            Tr??? v???
          </button>
        </a>

        <h2>??ang s???a h???c sinh t??n: {this.state.nameStudent}</h2>
        <h2>M?? HS: {this.state.maHs}</h2>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>T??n H???c Sinh:</label>
              <input
                value={this.state.nameStudent}
                type="text"
                className="form-control"
                name="nameStudent"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>M?? HS:</label>
              <input
                value={this.state.maHs}
                type="number"
                className="form-control"
                name="maHs"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Ng??y Sinh:</label>
              <input
                value={this.state.ngaySinh}
                type="date"
                className="form-control"
                name="ngaySinh"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>S??? ??i???n tho???i</label>
              <input
                value={this.state.soDienThoai}
                type="text"
                className="form-control"
                name="soDienthoai"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>??i???m To??n</label>
              <input
                value={this.state.diemToan}
                type="number"
                className="form-control"
                name="diemToan"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>??i???m V??n</label>
              <input
                value={this.state.diemVan}
                type="number"
                className="form-control"
                name="diemVan"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>??i???m H??a</label>
              <input
                value={this.state.diemHoa}
                type="number"
                className="form-control"
                name="diemHoa"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>??i???m Sinh</label>
              <input
                value={this.state.diemSinh}
                type="number"
                className="form-control"
                name="diemSinh"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>??i???m Tin</label>
              <input
                value={this.state.diemTin}
                type="number"
                className="form-control"
                name="diemTin"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>??i???m L???ch S???</label>
              <input
                value={this.state.diemLichSu}
                type="number"
                className="form-control"
                name="diemLichSu"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>??i???m ?????a L??</label>
              <input
                value={this.state.diemDiaLy}
                type="number"
                className="form-control"
                name="diemDiaLy"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>??i???m GDCD</label>
              <input
                value={this.state.diemGDCD}
                type="number"
                className="form-control"
                name="diemGDCD"
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              L??u L???i
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export { ChangeStudent };
