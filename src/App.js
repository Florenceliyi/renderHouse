import React, { Component, Fragment } from "react";
// 1 引入 ant 组件
import { Button } from "antd-mobile";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 2 使用 */}
        <div>
          <Button>按钮</Button>
        </div>
      </Fragment>
    );
  }
}
export default App;
