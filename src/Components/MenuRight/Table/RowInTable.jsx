import React, { Component } from "react";

class RowInTable extends Component {
  
  render() {
    return (
      <tr className="Table-row db-ListViewItem bs-ActionsParent BadgeParent db-ListViewItem--hasLink" onClick={() => this.props.getIdEvent(this.props.event_id)}>
        <td
          className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell db-BatchCell-container"
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
                      id="checkbox110"
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
          className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell db-ListViewItem-text"
          style={{ height: "1px" }}
        >
          {/* <a
            className="db-ListViewItem-link"
            href="https://dashboard.stripe.com/test/payments/ch_1FKhIhG1Nt1ZD4f4rXybJdzF"
          > */}
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--dark Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                <span>{this.props.event_name}</span>
              </span>
            </div>
          {/* </a> */}
        </td>
        <td
          className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
          style={{ height: "1px" }}
        >
          {/* <a
            className="db-ListViewItem-link"
            href="https://dashboard.stripe.com/test/payments/ch_1FKhIhG1Nt1ZD4f4rXybJdzF"
          > */}
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              {/* <span className="db-ListViewItem-text Text-color--gray Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                MYR
              </span> */}
            </div>
          {/* </a> */}
        </td>
        <td
          className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
          style={{ height: "1px" }}
        >
          {/* <a
            className="db-ListViewItem-link"
            href="https://dashboard.stripe.com/test/payments/ch_1FKhIhG1Nt1ZD4f4rXybJdzF"
          > */}
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <div className="Badge Badge--variant--status Box-root Box-background--blue100 Padding-horizontal--8 Padding-vertical--2 Flex-inlineFlex Flex-alignItems--center Flex-direction--row">
                <span className="Badge-text Text-color--blue600 Text-fontSize--12 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--inline">
                  <span>Trang thai event</span>
                </span>
                <div className="Badge-icon--container Box-root Padding-left--4">
                  <div className="SVGInline SVGInline--cleaned SVG Icon Icon--check Icon-color Icon-color--blue500 Box-root Flex-flex">
                    <svg
                      className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--check-svg Icon-color-svg Icon-color--blue500-svg"
                      height={16}
                      viewBox="0 0 16 16"
                      width={16}
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ height: "12px", width: "12px" }}
                    >
                      <path
                        d="M5.297 13.213L.293 8.255c-.39-.394-.39-1.033 0-1.426s1.024-.394 1.414 0l4.294 4.224 8.288-8.258c.39-.393 1.024-.393 1.414 0s.39 1.033 0 1.426L6.7 13.208a.994.994 0 0 1-1.402.005z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          {/* </a> */}
        </td>
        <td
          title="Payment from UserId: 49154ee4-c4a5-4c5d-8594-e08841cf7824) || Booking ID #24fd17dc-d004-463c-a726-6ac736d2fb01"
          className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--auto Table-cell--wrap--wrap db-ListViewItem-cell db-ListViewItem-cell--breakWord"
          style={{ height: "1px" }}
        >
          {/* <a
            className="db-ListViewItem-link"
            href="https://dashboard.stripe.com/test/payments/ch_1FKhIhG1Nt1ZD4f4rXybJdzF"
          > */}
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--default Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                {/* Tieu de email ned */}
                {this.props.event_subject}
              </span>
            </div>
          {/* </a> */}
        </td>
        <td
          aria-hidden="true"
          className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--auto Table-cell--wrap--wrap db-ListViewItem-cell db-ListViewItem-cell--breakWord"
          style={{ height: "1px" }}
        >
          {/* <a
            className="db-ListViewItem-link"
            href="https://dashboard.stripe.com/test/payments/ch_1FKhIhG1Nt1ZD4f4rXybJdzF"
          > */}
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              {/* ​Hoang Pham ned */}
              {this.props.event_membercreator}
            </div>
          {/* </a> */}
        </td>
        <td
          className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell"
          style={{ height: "1px" }}
        >
          {/* <a
            className="db-ListViewItem-link"
            href="https://dashboard.stripe.com/test/payments/ch_1FKhIhG1Nt1ZD4f4rXybJdzF"
          > */}
            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
              <span className="db-ListViewItem-text Text-color--default Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                <span>{this.props.event_date}</span>
              </span>
            </div>
          {/* </a> */}
        </td>
        <td
          className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell db-PaymentActionsCell"
          style={{ height: "1px" }}
        >
          <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
            <div className="db-PaymentActionsCell-outerbox db-ListViewItem-actions Box-root Flex-flex Flex-justifyContent--flexEnd">
              <div
                className="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Button--hideLabel db-PaymentActionsCell-placeholder Box-root Flex-inlineFlex"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
                }}
              >
                <div className="PressableCore-base Box-root">
                  <button
                    aria-hidden="true"
                    className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--small PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                    type="button"
                    style={{ color: "rgb(60, 66, 87)" }}
                  >
                    <div
                      className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                      style={{ position: "relative" }}
                    >
                      <div
                        className="TextAligner"
                        style={{
                          lineHeight: "16px",
                          fontSize: "13px",
                          flex: "0 0 auto"
                        }}
                      />
                      <div
                        className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                        style={{
                          width: "100%",
                          flex: "1 1 auto",
                          lineHeight: 0
                        }}
                      >
                        <div className="Box-root Padding-horizontal--2">
                          <div
                            className="SVGInline SVGInline--cleaned SVG Icon Icon--overflow Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex"
                            style={{
                              marginTop: "-0.09px",
                              transform: "translateY(1.42px)"
                            }}
                          >
                            <svg
                              className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--overflow-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg"
                              height={16}
                              viewBox="0 0 16 16"
                              width={16}
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ height: "12px", width: "12px" }}
                            >
                              <path
                                d="M2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                fillRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <span
                          className="Button-label Text-color--default Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text--visuallyHidden Text-wrap--noWrap Text-display--block"
                          style={{ marginTop: "-1px" }}
                        >
                          <span>More options</span>
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
              </div>
              <div className="db-PaymentActionsCell-innerbox Box-root">
                <div className="ButtonBar Box-root Flex-flex">
                  <div className="ButtonBar-item ButtonBar-item--isFirst">
                    <div
                      className="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--left PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Button--hideLabel ButtonBar-button Box-root Flex-inlineFlex"
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        boxShadow:
                          "rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
                      }}
                    >
                      <div className="PressableCore-base Box-root">
                        <button
                          data-test="payment-action-refund"
                          className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--small PressableContext--radius--left PressableContext--width PressableContext--width--auto"
                          type="button"
                          style={{ color: "rgb(60, 66, 87)" }}
                        >
                          <div
                            className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                            style={{ position: "relative" }}
                          >
                            <div
                              className="TextAligner"
                              style={{
                                lineHeight: "16px",
                                fontSize: "13px",
                                flex: "0 0 auto"
                              }}
                            />
                            <div
                              className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                              style={{
                                width: "100%",
                                flex: "1 1 auto",
                                lineHeight: 0
                              }}
                            >
                              <div className="Box-root Padding-horizontal--2">
                                <div
                                  className="SVGInline SVGInline--cleaned SVG Icon Icon--refund Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex"
                                  style={{
                                    marginTop: "-0.09px",
                                    transform: "translateY(1.42px)"
                                  }}
                                >
                                  <svg
                                    className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--refund-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg"
                                    height={16}
                                    viewBox="0 0 16 16"
                                    width={16}
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ height: "12px", width: "12px" }}
                                  >
                                    <path
                                      d="M10.5 5a5 5 0 0 1 0 10 1 1 0 0 1 0-2 3 3 0 0 0 0-6l-6.586-.007L6.45 9.528a1 1 0 0 1-1.414 1.414L.793 6.7a.997.997 0 0 1 0-1.414l4.243-4.243A1 1 0 0 1 6.45 2.457L3.914 4.993z"
                                      fillRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <span
                                className="Button-label Text-color--default Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text--visuallyHidden Text-wrap--noWrap Text-display--block"
                                style={{ marginTop: "-1px" }}
                              >
                                <span>Refund payment…</span>
                              </span>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                    </div>
                  </div>
                  <div className="ButtonBar-item ButtonBar-item--isLast">
                    <div className="Box-root Flex-flex">
                      <div className="Box-root Flex-flex">
                        <div
                          className="PressableCore PressableCore--cursor--pointer PressableCore--height--small PressableCore--radius--right PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Button--hideLabel ButtonBar-button OverflowMenu Box-root Flex-inlineFlex"
                          style={{
                            backgroundColor: "rgb(255, 255, 255)",
                            boxShadow:
                              "rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
                          }}
                        >
                          <div className="PressableCore-base Box-root">
                            <button
                              aria-controls="menu111"
                              aria-haspopup="menu"
                              id="menu111-button"
                              className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--16 PressableContext--fontSize--13 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--small PressableContext--radius--right PressableContext--width PressableContext--width--auto"
                              type="button"
                              style={{ color: "rgb(60, 66, 87)" }}
                            >
                              <div
                                className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                                style={{ position: "relative" }}
                              >
                                <div
                                  className="TextAligner"
                                  style={{
                                    lineHeight: "16px",
                                    fontSize: "13px",
                                    flex: "0 0 auto"
                                  }}
                                ></div>
                                <div
                                  className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                                  style={{
                                    width: "100%",
                                    flex: "1 1 auto",
                                    lineHeight: 0
                                  }}
                                >
                                  <div className="Box-root Padding-horizontal--2">
                                    <div
                                      className="SVGInline SVGInline--cleaned SVG Icon Icon--overflow Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex"
                                      style={{
                                        marginTop: "-0.09px",
                                        transform: "translateY(1.42px)"
                                      }}
                                    >
                                      <svg
                                        className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--overflow-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg"
                                        height={16}
                                        viewBox="0 0 16 16"
                                        width={16}
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                          height: "12px",
                                          width: "12px"
                                        }}
                                      >
                                        <path
                                          d="M2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                          fillRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <span
                                    className="Button-label Text-color--default Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text--visuallyHidden Text-wrap--noWrap Text-display--block"
                                    style={{ marginTop: "-1px" }}
                                  >
                                    More options
                                  </span>
                                </div>
                              </div>
                            </button>
                          </div>
                          <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default RowInTable;
