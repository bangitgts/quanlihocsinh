/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ManagerList } from "../MangerList";
class Manager extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Panel title</h3>
          </div>
          <div className="panel-body">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-primary">
                <span className="fa fa-plus mr-5" />
                Thêm Sinh Viên
              </button>
              <div className="row mt-15">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập từ khóa để tìm học sinh..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="button">
                        <span className="fa fa-search mr-5" />
                        Tìm
                      </button>
                    </span>
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
                      Sắp Xếp{""}
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
                      <li role="separator" className="divider" />
                      <li>
                        <a role="button">Trạng Thái Kích Hoạt</a>
                      </li>
                      <li>
                        <a role="button">Trạng Thái Ẩn</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              &nbsp;
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên Học Sinh</th>
                        <th className="text-center">Mã số học sinh</th>
                        <th className="text-center">Tài Khoản</th>
                        <th className="text-center">Mật khẩu</th>
                        <th className="text-center">Điểm trung bình</th>
                      </tr>
                    </thead>
                    <ManagerList/>
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


export {Manager};