import React from "react";

// 无状态组件
const Header = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <h1>Header</h1>
          {true ? "Hello" : "no Ok"}
        </div>
      </div>
    </div>
  );
};
export default Header;
