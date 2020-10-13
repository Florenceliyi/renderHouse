import React from "react";
// 1 引入 ant 组件
import { Button } from "antd-mobile";
// 引入页面组件
import Home from "./pages/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Home></Home>
        {/* 2 使用 */}
        <h1 className="bg_color">主体颜色</h1>
        <div>
          <Button type="primary">按钮</Button>
        </div>
      </>
    );
  }
}
export default App;
