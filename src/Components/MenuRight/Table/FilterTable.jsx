import React, { Component } from "react";

export default class FilterTable extends Component {
  render() {
    return (
      <div className="bs-FilterControl">
        <span className="bs-FilterControl-buttonContainer">
          <div
            className="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white bs-FilterControl-btn Box-root Flex-inlineFlex"
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
                  ></div>
                  <div
                    className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center"
                    style={{ width: "100%", flex: "1 1 auto", lineHeight: 0 }}
                  >
                    <div className="Box-root Padding-right--8">
                      <div
                        className="SVGInline SVGInline--cleaned SVG Icon Icon--filter Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex"
                        style={{ transform: "translateY(1.07px)" }}
                      >
                        <svg
                          className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--filter-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg"
                          height={16}
                          viewBox="0 0 16 16"
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ height: "12px", width: "12px" }}
                        >
                          <path
                            d="M13.994.004c.555 0 1.006.448 1.006 1a.997.997 0 0 1-.212.614l-5.782 7.39L9 13.726a1 1 0 0 1-.293.708L7.171 15.97A.1.1 0 0 1 7 15.9V9.008l-5.788-7.39A.996.996 0 0 1 1.389.214a1.01 1.01 0 0 1 .617-.21z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <span
                      className="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"
                      style={{ marginTop: "-1px" }}
                    >
                      <div className="Box-root Flex-flex Flex-alignItems--center">
                        <span>Filter</span>
                        <div className="Box-root Box-divider--light-left-1 Margin-left--8 Padding-left--8">
                          <span className="Text-color--blue Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                            <span>1</span>
                          </span>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </button>
            </div>
            <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white"></div>
          </div>
        </span>
      </div>
    );
  }
}
