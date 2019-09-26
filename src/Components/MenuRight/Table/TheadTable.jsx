import React, { Component } from "react";

export default class TheadTable extends Component {
  render() {
    return (
      <thead className="Table-head">
        <tr className="Table-row db-ListViewItem db-ListViewItem-header">
          <td
            id="batch"
            className="Table-cell Table-cell--align--center Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
            style={{ height: "1px" }}
          >
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <div
                className="db-BatchCell Box-root Flex-flex Flex-alignItems--center"
                style={{ minHeight: "20px" }}
              >
                <div className="PressableControlLabel Checkbox Box-root">
                  <div
                    className="PressableCore PressableCore--cursor--pointer PressableCore--radius--all PressableCore--width PressableControl Box-root Flex-inlineFlex"
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      height: "14px",
                      boxShadow:
                        "rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
                      minWidth: "14px",
                      width: "14px"
                    }}
                  >
                    <div className="PressableCore-base Box-root">
                      <input
                        className="Checkbox-source PressableContext PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--radius--all PressableContext--width"
                        id="checkbox109"
                        type="checkbox"
                      />
                      <div className="SVGInline SVGInline--cleaned SVG Checkbox-mark Box-root Flex-flex">
                        <svg
                          className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Checkbox-mark-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          style={{ height: "14px", width: "14px" }}
                        >
                          <path
                            fill="#FFF"
                            d="M10.346 3.301a.929.929 0 0 1 1.37 0 1.076 1.076 0 0 1 0 1.456l-4.64 4.94a.929.929 0 0 1-1.37 0L3.284 7.123a1.076 1.076 0 0 1 0-1.456.929.929 0 0 1 1.37 0L6.39 7.513l3.955-4.212z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td
            id="amount"
            className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
            style={{ height: "1px" }}
          >
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--dark Text-align--right Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--block">
                <span>Events</span>
              </span>
            </div>
          </td>
          <td
            id="currency"
            className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
            style={{ height: "1px" }}
          >
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline">
                <span />
              </span>
            </div>
          </td>
          <td
            id="status"
            type="badge"
            className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
            style={{ height: "1px" }}
          >
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline">
                <span />
              </span>
            </div>
          </td>
          <td
            className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--auto Table-cell--wrap--noWrap db-ListViewItem-cell"
            style={{ height: "1px" }}
          >
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline">
                <span>Email Subject</span>
              </span>
            </div>
          </td>
          <td
            className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--auto Table-cell--wrap--noWrap db-ListViewItem-cell"
            style={{ height: "1px" }}
          >
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline">
                <span>Creater</span>
              </span>
            </div>
          </td>
          <td
            id="created"
            className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
            style={{ height: "1px" }}
          >
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline">
                <span>Date</span>
              </span>
            </div>
          </td>
          <td
            id="overflow"
            type="action"
            className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
            style={{ height: "1px" }}
          >
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--dark Text-align--right Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--block">
                <span />
              </span>
            </div>
          </td>
        </tr>
      </thead>
    );
  }
}
