/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React from "react";
import { Menu } from "../../components/Menu";
import { ManagerList } from "../../components/MangerList/MangerList";

class Manager extends React.Component {
  constructor(props) {
    super(props);
    let i = 0;
    const dataLocal = [
      {
        id: i++,
        nameStudent: "Nguyen B",
        maHs: 185112003,
        ngaySinh: "20/6/2000",
        soDienThoai: "03844332",
        diemTrungBinh: 8.8,
      },
      {
        id: i++,
        nameStudent: "Nguyen C",
        maHs: 185112002,
        ngaySinh: "20/6/2001",
        soDienThoai: "0312io12io2",
        diemTrungBinh: 8.1,
      },
      {
        id: i++,
        nameStudent: "Nguyen C",
        maHs: 185112002,
        ngaySinh: "20/6/2001",
        soDienThoai: "0312io12io2",
        diemTrungBinh: 8.1,
      },
    ];
    localStorage.setItem("data", JSON.stringify(dataLocal));

    this.state = {
      fakeData: [],
      dataOn: [],
      value: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    var storedNames = JSON.parse(localStorage.getItem("data"));
    this.setState({
      fakeData: storedNames,
    });
  }
  componentWillUnmount(){
    dataLocal.push(JSON.parse(localStorage.getItem('dataGet')))
  }
  onReceive(prams) {
    const fakeData = this.state.fakeData;
    fakeData.push(prams);
    this.setState(fakeData);
  }
  onChange(event) {
    let newData = this.state.fakeData.filter(
      (e) =>
        e.nameStudent.search(event.target.value) !== -1 ||
        e.diemTrungBinh.toString().search(event.target.value) !== -1 ||
        e.maHs.toString().search(event.target.value) !== -1
    );
    this.setState({
      value: event.target.value,
      dataOn: newData,
    });

    //localStorage.setItem('userDataon',this.state.dataOn)
  }

  render() {
    const getDulieu =
      this.state.value === "" && this.state.fakeData.length > 0 ? (
        <ManagerList
          onGetdata={this.state.fakeData}
          onReceive={this.onReceive}
          onGet={this.state.value}
        />
      ) : (
        <ManagerList onGetdata={this.state.dataOn} onGet={this.state.value} />
      );
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Information</h3>
          </div>
          <div className="panel-body">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Link to="/student/add" className="btn btn-danger">
                Thêm Học Sinh
              </Link>
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="input">
                    <input
                      onChange={this.onChange}
                      type="text"
                      className="form-control"
                      placeholder="Nhập từ khóa hệ thống sẽ tự động tìm kiếm"
                    />
                    {/* <span className="input-group-btn">
                      <button className="btn btn-primary" type="button">
                        <span className="fa fa-search mr-5" />
                        Tìm
                      </button>
                    </span> */}
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Sắp Xếp{" "}
                      <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenu1"
                    >
                      <li>
                        <a role="button">
                          <span className="fa fa-sort-alpha-asc pr-5">
                            Tên A-Z
                          </span>
                        </a>
                      </li>
                      <li>
                        <a role="button">
                          <span className="fa fa-sort-alpha-desc pr-5">
                            Tên Z-A
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              &nbsp;
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên Học Sinh</th>
                        <th className="text-center">Mã HS</th>
                        <th className="text-center">Ngày Sinh</th>
                        <th className="text-center">Số Điện Thoại</th>
                        <th className="text-center">Điểm Trung Bình</th>
                      </tr>
                    </thead>
                    {/*     
                    <ManagerList onGetdata={this.state.dataOn} onGet={this.state.value}/> */}
                    {getDulieu}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Manager };
