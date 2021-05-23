import React from "react";
class ManagerList extends React.Component {
  render() {
    let data = this.props.onGetdata;
    function showProducts(data) {      
      var result = null;
      if (data.length > 0) {
        result = data.map((data) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.nameStudent}</td>
              <td>{data.maHs}</td>
              <td>{data.ngaySinh}</td>
              <td>18389389</td>
              <td>{data.diemTrungBinh}</td>
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
          );
        });
      }
      return result;
    }

    
     return <tbody>
       {showProducts(data)}
     </tbody>;

  }
}
export {ManagerList};
