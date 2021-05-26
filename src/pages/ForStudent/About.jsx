/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "../../components/Menu";

class About extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-12">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-12">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { About };
