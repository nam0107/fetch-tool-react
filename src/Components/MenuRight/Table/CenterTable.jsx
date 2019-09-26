import React, { Component } from "react";
import TabAboveTable from "./TabAboveTable";
import FilterTable from "./FilterTable";
import NewExport from "./NewExport";
import TableDetail from "./TableDetai";
import FooterTable from "../Pagination/FooterTable";

class CenterTable extends Component {
  render() {
    return (
      <div
        tabIndex={-1}
        className="db-World-mainPane Box-root Padding-right--20"
      >
        <div
          role="main"
          className="db-World-contentPane Box-root Padding-bottom--48"
        >
          <div>
            <TabAboveTable />
            <div className="Card-root Card--radius--all Card--shadow--medium Box-root Box-background--white">
              <div className="db-ListView db-ListView--withFooter">
                <div className="Box-root Box-divider--light-bottom-1 Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-justifyContent--spaceBetween">
                  <FilterTable />
                  <NewExport />
                </div>
                <TableDetail></TableDetail>
                <FooterTable></FooterTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CenterTable;
