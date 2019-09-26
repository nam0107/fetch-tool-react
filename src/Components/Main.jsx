import React, { Component } from "react";

import RightMenu from "./MenuRight/RightMenu";
import LeftMenu from "./MenuLeft/LeftMenu";

export default class Main extends Component {
  render() {
    return (
      <div className="db-World-scrollWrapper">
        <LeftMenu />
        <RightMenu />
      </div>
    );
  }
}
