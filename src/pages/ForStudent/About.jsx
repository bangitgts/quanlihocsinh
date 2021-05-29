/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "../../components/Menu";
import { MenuForST } from "../../components/MenuForST";
var axios = require("axios");

class About extends React.Component {
  render() {
    const data = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <MenuForST />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                <div class="panel panel-info">
                  <div class="panel-heading">
                    <h3 class="panel-title">Thông Tin Học Sinh</h3>
                  </div>
                  <div class="panel-body">
                    <p>
                      <strong>Tên học sinh:</strong> {data.nameStudent}
                    </p>
                    <p>
                      <strong>Mã số học sinh:</strong>
                      {data.maHs}
                    </p>
                    <p>
                      <strong>Ngày sinh:</strong>
                      {data.ngaySinh}
                    </p>
                    <p>
                      <strong>Số điện thoại:</strong>
                      {data.soDienThoai}
                    </p>
                    <h3>
                      <strong>Bảng điểm</strong>
                    </h3>
                    <table class="table table-condensed table-hover">
                      <thead>
                        <tr>
                          <th>Điểm Toán</th>
                          <th>Điểm Lý</th>
                          <th>Điểm Văn</th>
                          <th>Điểm Hóa</th>
                          <th>Điểm Sinh</th>
                          <th>Điểm Tin</th>
                          <th>Điểm Lịch Sử</th>
                          <th>Điểm Địa Lý</th>
                          <th>Điểm GDCD</th>
                          <th>Điểm Trung Bình</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{data.diemToan}</td>
                          <td>{data.diemLy}</td>
                          <td>{data.diemVan}</td>
                          <td>{data.diemHoa}</td>
                          <td>{data.diemSinh}</td>
                          <td>{data.diemTin}</td>
                          <td>{data.diemLichSu}</td>
                          <td>{data.diemDiaLy}</td>
                          <td>{data.diemGDCD}</td>
                          <td>
                            {Math.round(
                              ([
                                parseFloat(data.diemToan),
                                parseFloat(data.diemLy),
                                parseFloat(data.diemVan),
                                parseFloat(data.diemHoa),
                                parseFloat(data.diemSinh),
                                parseFloat(data.diemLichSu),
                                parseFloat(data.diemDiaLy),
                                parseFloat(data.diemGDCD),
                                parseFloat(data.diemTin),
                              ].reduce((a, b) => a + b) /
                                9) *
                                100
                            ) / 100}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { About };
