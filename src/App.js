import React from "react";
// 引入页面组件
import Home from "./pages/Home";
import Tab from "./pages/Index";
import "./static/fonts/iconfont.css";
import { HashRouter, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routers from "./router";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Tab />

        {renderRoutes(routers)}
      </div>
    );
  }
}
export default withRouter(App);
