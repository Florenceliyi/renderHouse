import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
class MapFound extends Component {
  render() {
    console.log(this.props);
    return <div>{renderRoutes(this.props.route.routes)}</div>;
  }
}

export default MapFound;
