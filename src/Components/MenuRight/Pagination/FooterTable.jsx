import React, { Component } from "react";

export default class FooterTable extends Component {
  render() {
    return (
      <div className="Box-root Flex-flex Flex-alignItems--center Flex-justifyContent--spaceBetween">
        <div className="Box-root Padding-all--20 Flex-flex Flex-alignItems--center">
          <span className="Text-color--default Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
            <span>
              <span>
                <strong>30 </strong>
                results
              </span>
            </span>
          </span>
        </div>
        <div className="Box-root Padding-horizontal--20 Padding-vertical--16">
          <div className="Box-root">
            <div
              className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap"
              style={{ marginLeft: "-8px", marginTop: "-8px" }}
            >
              <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                <div
                  className="PressableCore PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Is--disabled Box-root Flex-inlineFlex"
                  style={{
                    backgroundColor: "rgb(247, 250, 252)",
                    boxShadow:
                      "rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
                  }}
                >
                  <div className="PressableCore-base Box-root">
                    <button
                      data-db-analytics-name="list_view.pagination.previous"
                      className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                      disabled
                      type="button"
                      style={{ color: "rgb(163, 172, 185)" }}
                    >
                      <div
                        className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="TextAligner"
                          style={{
                            lineHeight: "20px",
                            fontSize: "14px",
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
                          <span
                            className="Button-label Text-color--disabled Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                            style={{ marginTop: "-1px" }}
                          >
                            <span>Previous</span>
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                </div>
              </div>
              <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                <div
                  className="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    boxShadow:
                      "rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
                  }}
                >
                  <div className="PressableCore-base Box-root">
                    <a
                      data-db-analytics-name="list_view.pagination.next"
                      className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto"
                      href="https://dashboard.stripe.com/test/payments?status%5B%5D=successful&starting_after=ch_1FCi8HG1Nt1ZD4f43aU3xVW9"
                      style={{ color: "rgb(60, 66, 87)" }}
                    >
                      <div
                        className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="TextAligner"
                          style={{
                            lineHeight: "20px",
                            fontSize: "14px",
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
                          <span
                            className="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                            style={{ marginTop: "-1px" }}
                          >
                            <span>Next</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
