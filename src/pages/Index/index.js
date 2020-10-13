import React from "react";
import { TabBar } from "antd-mobile";
import Found from "../MapFound";
import Mycenter from "../My";
import { renderRoutes } from "react-router-config";

// import { HashRouter, Route, Switch } from "react-router-dom";

class Index extends React.PureComponent {
  // 生命周期函数 constructor()
  state = {
    selectedTab: "1",
    hidden: false,
  };

  render() {
    console.log(this.props);
    //解构路由对象中的方法；
    const { history, location } = this.props;

    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        {/* {this.props.route.routes && renderRoutes(this.props.route.routes)} */}
        {this.props.location && (
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#21B97A"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              title="首页"
              key="首页"
              icon={<i className="iconfont icon-ind" />}
              selectedIcon={<i className="iconfont icon-ind" />}
              selected={location.pathname === "/home" || "/"}
              onPress={() => {
                history.push("/home");
              }}
            >
              <div> 首页内容 </div>
            </TabBar.Item>
            <TabBar.Item
              title="找房"
              key="找房"
              icon={<i className="iconfont icon-findHouse" />}
              selectedIcon={<i className="iconfont icon-findHouse" />}
              selected={location.pathname === "/home/list"}
              onPress={() => {
                history.push("/home/list");
              }}
            >
              <div> 找房内容 </div>
            </TabBar.Item>
            <TabBar.Item
              title="我的"
              key="我的"
              icon={<i className="iconfont icon-my" />}
              selectedIcon={<i className="iconfont icon-my" />}
              selected={location.pathname === "/home/profile"}
              onPress={() => {
                history.push("/home/profile");
              }}
            >
              <div> 我的内容 </div>
            </TabBar.Item>
          </TabBar>
        )}
      </div>
    );
  }
}

export default Index;
