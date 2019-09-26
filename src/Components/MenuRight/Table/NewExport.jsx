import React, { Component } from "react";
import NewExportLeft from "./NewExportLeft";
import NewExportRight from "./NewExportRight";

export default class NewExport extends Component {
  render() {
    return (
      <div className="Box-root">
        <div
          className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
          style={{ marginLeft: "-8px", marginTop: "-8px" }}>
          <NewExportLeft />
          <NewExportRight />
        </div>
      </div>
    );
  }
}
