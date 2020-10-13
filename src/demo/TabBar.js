import React from "react";
import { TabBar } from "antd-mobile";
import "./TabBar.scss";

class TabBarExample extends React.Component {
  // 生命周期函数 constructor()
  state = {
    selectedTab: "1",
    hidden: false,
  };

  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
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
            selected={this.state.selectedTab === "1"}
            onPress={() => {
              this.setState({ selectedTab: "1" });
            }}
          >
            <div> 首页内容 </div>
          </TabBar.Item>
          <TabBar.Item
            title="找房"
            key="找房"
            icon={<i className="iconfont icon-findHouse" />}
            selectedIcon={<i className="iconfont icon-findHouse" />}
            selected={this.state.selectedTab === "2"}
            onPress={() => {
              this.setState({ selectedTab: "2" });
            }}
          >
            <div> 找房内容 </div>
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            key="我的"
            icon={<i className="iconfont icon-my" />}
            selectedIcon={<i className="iconfont icon-my" />}
            selected={this.state.selectedTab === "3"}
            onPress={() => {
              this.setState({ selectedTab: "3" });
            }}
          >
            <div> 我的内容 </div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample;
// ReactDOM.render(<TabBarExample />, mountNode);
