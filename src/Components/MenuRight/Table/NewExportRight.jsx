import React, { Component } from "react";

export default class NewExportRight extends Component {
  render() {
    return (
      <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
        <div>
          <div>
            <div className="db-BackboneViewContainer">
              <div className="export-modal-button-view react-view">
                <span>
                  <div>
                    <div>
                      <div
                        className="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex"
                        style={{
                          backgroundColor: "rgb(255, 255, 255)",
                          boxShadow:
                            "rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
                        }}
                      >
                        <div className="PressableCore-base Box-root">
                          <button
                            data-db-analytics-name="list_views.header.export.filter"
                            className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto"
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
                                  lineHeight: "20px",
                                  fontSize: "14px",
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
                                <div className="Box-root Padding-right--8">
                                  <div
                                    className="SVGInline SVGInline--cleaned SVG Icon Icon--export Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex"
                                    style={{
                                      transform: "translateY(1.07px)"
                                    }}
                                  >
                                    <svg
                                      className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--export-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg"
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
                                        d="M15 10.006a1 1 0 1 1-2 0v-5.6L2.393 15.009a.992.992 0 1 1-1.403-1.404L11.595 3.002h-5.6a1 1 0 0 1 0-2.001h8.02a1 1 0 0 1 .284.045.99.99 0 0 1 .701.951z"
                                        fillRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <span
                                  className="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                                  style={{ marginTop: "-1px" }}
                                >
                                  <span>Export</span>
                                </span>
                              </div>
                            </div>
                          </button>
                        </div>
                        <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
                      </div>
                      <div>
                        <div>
                          <div className="db-BackboneViewContainer">
                            <div className="chrome-modals-view react-view">
                              <span>
                                <div />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
