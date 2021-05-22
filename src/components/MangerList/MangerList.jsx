import React from "react";
class ManagerList extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>1</td>
          <td>Học lập trình</td>
          <td>18389389</td>
          <td>18389389</td>
          <td>18389389</td>
          <td>8.6</td>
          <td className="text-center">
            <button type="button" className="btn btn-warning">
              <span className="fa fa-pencil mr-5" />
              Sửa
            </button>
            &nbsp;
            <button type="button" className="btn btn-danger">
              <span className="fa fa-trash mr-5" />
              Xóa
            </button>
            &nbsp;
            <button type="button" className="btn btn-default">
              <span className="fa fa-trash mr-5" />
              Xem chi tiết
            </button>
          </td>
        </tr>
      </tbody>
    );
  }
}

export {ManagerList};
