import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div className="db-World-topContent Box-root Box-background--surface Padding-vertical--20" style={{zIndex: 0}}>
                <div className="Box-root Flex-flex Flex-alignItems--center Flex-justifyContent--spaceBetween">
                    <div className="db-Spotlight-inputContainer">
                        <div className="Card-root Card--radius--all Card--shadow--small Box-root Box-background--white">
                            <div className="Box-root">
                                <div className="db-SuggestionInput-outer Box-root">
                                    <div className="db-SuggestionInput-backing Box-root Padding-horizontal--12 Padding-vertical--4">
                                        <div className="Box-root">
                                            <div className="Box-root Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap" style={{ marginLeft: '-8px', marginTop: '-8px' }}>
                                                <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                                                    <div className="SVGInline SVGInline--cleaned SVG Icon Icon--search db-SuggestionInput-icon Icon-color Icon-color--gray400 Box-root Flex-flex">
                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--search-svg db-SuggestionInput-icon-svg Icon-color-svg Icon-color--gray400-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '12px', width: '12px' }}>
                                                            <path d="M12.6 11.2c.037.028.073.059.107.093l3 3a1 1 0 1 1-1.414 1.414l-3-3a1.009 1.009 0 0 1-.093-.107 7 7 0 1 1 1.4-1.4zM7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10z" fillRule="evenodd" />
                                                        </svg></div>
                                                </div>
                                                <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                                                    <div className="db-SuggestionInput-shadow"><span className="db-SuggestionInput-backingText Text-color--white Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--inline" /><span className="Text-color--gray500 Text-fontSize--14 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--inline">Search…</span>
                                                    </div>
                                                </div>
                                                <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                                                    <div className="db-SuggestionInput-gradientBacking" />
                                                </div>
                                            </div>
                                        </div>
                                    </div><input className="db-SuggestionInput-input" aria-label="Search…" aria-placeholder="Search…" autoCorrect="false" spellCheck="false" type="text"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Box-root">
                        <div className="Box-root Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap" style={{ marginLeft: '-12px', marginTop: '-12px' }}>
                            <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12" />
                            <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12">
                                <div className="Box-root Padding-right--8">
                                    <div className="Card-root Card--radius--all Card--shadow--small db-FeedbackInput-container Box-root Box-background--white">
                                        <div className="db-FeedbackInput-box Box-root Box-background--offset Padding-horizontal--8 Padding-vertical--4 Flex-flex Flex-alignItems--center">
                                            <div className="Box-root Margin-right--8 Flex-flex"><span className="db-FeedbackInput-defaultIcon" /></div><span className="Text-color--gray500 Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
                                                <div className="TruncatedText" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    <span>Feedback about this page?</span></div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12" />
                            <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12">
                                <div>
                                    <div className="Box-root Flex-flex">
                                        <div className="Box-root Flex-flex">
                                            <div aria-controls="menu55" aria-haspopup="menu" id="menu55-button" tabIndex={-1} style={{ outline: 'none' }}>
                                                <div className="db-NotificationsX-button Box-root Padding-all--4" style={{ position: 'relative' }}>
                                                    <div aria-label="Notifications" className="SVGInline SVGInline--cleaned SVG Icon Icon--notifications Icon--hoverable Icon-color Icon-color--gray Box-root Flex-flex" style={{ cursor: 'pointer' }}><svg aria-label="Notifications" className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--notifications-svg Icon--hoverable-svg Icon-color-svg Icon-color--gray-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', width: '20px' }}>
                                                        <path d="M5.55 14h4.9a2.5 2.5 0 0 1-4.9 0zM13 9.066l1.216 1.232A1 1 0 0 1 13.504 12H2.496a1 1 0 0 1-.712-1.702L3 9.066V5a5 5 0 1 1 10 0z" fillRule="evenodd" />
                                                    </svg></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12">
                                <div className="Box-root Margin-right--4"><span>
                                    <div className="Box-root Flex-flex">
                                        <div className="Box-root Flex-flex">
                                            <div aria-controls="menu56" aria-haspopup="menu" id="menu56-button" className="Box-root Padding-all--4">
                                                <div aria-label="Documentation" className="SVGInline SVGInline--cleaned SVG Icon Icon--help Icon--hoverable Icon-color Icon-color--gray Box-root Flex-flex" style={{ cursor: 'pointer' }}><svg aria-label="Documentation" className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--help-svg Icon--hoverable-svg Icon-color-svg Icon-color--gray-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', width: '20px' }}>
                                                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM7 8.089V8.5a1 1 0 0 0 1.926.377 3.456 3.456 0 0 0 1.549-.902 3.5 3.5 0 0 0-4.95-4.95A3.437 3.437 0 0 0 4.5 5.51a1.004 1.004 0 1 0 2.009-.02 1.43 1.43 0 0 1 .436-1.045 1.5 1.5 0 0 1 1.058-.437 1.492 1.492 0 0 1 0 2.983A1.004 1.004 0 0 0 7 8.09zM8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillRule="evenodd" />
                                                </svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </span></div>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--12 Margin-left--12">
                                <div>
                                    <div className="Box-root Flex-flex">
                                        <div className="Box-root Flex-flex"><button className="UnstyledLink db-UserMenu" aria-label="User menu" aria-controls="menu57" aria-haspopup="menu" id="menu57-button" type="button">
                                            <div className="Box-root">
                                                <div className="Box-root Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap" style={{ marginLeft: '-12px' }}>
                                                    <div className="Box-root Box-hideIfEmpty Margin-left--12">
                                                        <div className="Card-root Card--radius--circle Card--shadow--small Avatar Avatar--size--28 Box-root Box-background--white">
                                                            <div className="Avatar-inner Box-root Flex-flex Flex-alignItems--center Flex-justifyContent--center">
                                                                <div className="SVGInline SVGInline--cleaned SVG Icon Icon--person Icon-color Icon-color--gray300 Box-root Flex-flex">
                                                                    <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--person-svg Icon-color-svg Icon-color--gray300-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', width: '16px' }}>
                                                                        <path d="M8 11a5.698 5.698 0 0 0 3.9-1.537l1.76.66A3.608 3.608 0 0 1 16 13.5V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1.5c0-1.504.933-2.85 2.34-3.378l1.76-.66A5.698 5.698 0 0 0 8 11zM7.804 0h.392a3.5 3.5 0 0 1 3.488 3.79l-.164 1.971a3.532 3.532 0 0 1-7.04 0l-.164-1.97A3.5 3.5 0 0 1 7.804 0z" fillRule="evenodd" />
                                                                    </svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><span className="db-World-topContent--left" /><span className="db-World-topContent--right" />
            </div>
        );
    }
}

export default SearchBar;