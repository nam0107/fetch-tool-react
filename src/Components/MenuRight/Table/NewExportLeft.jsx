import React, { Component } from "react";

export default class NewExportLeft extends Component {
  render() {
    return (
      <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
        <div className="Box-root">
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
                  />
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
                        className="SVGInline SVGInline--cleaned SVG Icon Icon--new Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex"
                        style={{ transform: "translateY(1.07px)" }}
                      >
                        <svg
                          className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--new-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg"
                          height={16}
                          viewBox="0 0 16 16"
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ height: "12px", width: "12px" }}
                        >
                          <path
                            d="M9 7h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6V1a1 1 0 1 1 2 0z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <span
                      className="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                      style={{ marginTop: "-1px" }}
                    >
                      <span>New</span>
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
          </div>
        </div>
      </div>
    );
  }
}
