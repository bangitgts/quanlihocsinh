import React from "react";
import { Link } from "react-router-dom";

class ManagerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDel: "",
    };
    this.editText = this.editText.bind(this);
  }
  componentDidUpdate() {
    console.log(localStorage.getItem("dataDel"));
  }

  editText() {
    console.log("anc");
  }
  render() {
    const getNew =
      JSON.stringify(localStorage.getItem("dataID")).length > 0 ? "/sua" : "/";
    let data = this.props.onGetdata;
    function showProducts(data) {
      var result = null;
      let i = 1;
      if (data.length > 0) {
        result = data.map((data) => {
          return (
            <tr>
              <td>{i++}</td>
              <td>{data.nameStudent}</td>
              <td>{data.maHs}</td>
              <td>{data.ngaySinh}</td>
              <td>18389389</td>
              <td>{data.diemTrungBinh}</td>
              <td className="text-center">
                <Link
                  to={getNew}
                  onClick={() => localStorage.setItem("dataId", data.id)}
                  className="btn btn-warning"
                >
                  Sửa
                </Link>
                &nbsp;
                <Link
                  to="/manager"
                  onClick={() => localStorage.setItem("dataDel", data.id)}
                  className="btn btn-danger"
                >
                  Delete
                </Link>
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

    return <tbody>{showProducts(data)}</tbody>;
  }
}
export { ManagerList };
