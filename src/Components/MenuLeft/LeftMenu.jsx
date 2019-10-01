import React, { Component } from 'react';


class LeftMenu extends Component {
    render() {
        return (
            <div className="db-World-sideNavContainer" style={{zIndex: 0}}>
                <div className="db-SkipToContentButton" style={{ transform: 'scale(0)' }}>
                    <div className="PressableCore PressableCore--cursor--pointer PressableCore--height--large PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--blue db-SkipToContentButton-button Box-root Flex-inlineFlex" style={{ backgroundColor: 'rgb(85, 108, 214)', boxShadow: 'rgb(61, 78, 172) 0px 1px 0px 0px, rgb(85, 108, 214) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.22) 0px 2px 4px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px' }}>
                        <div className="PressableCore-base Box-root"><button className="UnstyledLink Button-element PressableContext Padding-horizontal--12 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--28 PressableContext--fontSize--16 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--large PressableContext--radius--all PressableContext--width PressableContext--width--auto" type="button" style={{ color: 'rgb(255, 255, 255)' }}>
                            <div className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{ position: 'relative' }}>
                                <div className="TextAligner" style={{ lineHeight: '28px', fontSize: '16px', flex: '0 0 auto' }} />
                                <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center" style={{ width: '100%', flex: '1 1 auto', lineHeight: 0 }}><span className="Button-label Text-color--white Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--28 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block" style={{ marginTop: '-1px' }}><span>Skip to content</span></span></div>
                            </div>
                        </button></div>
                        <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                        </div>
                    </div>
                </div>
                <div className="db-SideNav-container Box-root Box-background--surface Padding-right--2 Padding-vertical--20 Flex-flex Flex-direction--column">
                    <div className="Box-root Margin-bottom--20">
                        <div>
                            <div>
                                <div>
                                    <div className="db-AccountSwitcher-button" tabIndex={0} role="button">
                                        <div className="Box-root Flex-flex Flex-alignItems--center Flex-direction--row">
                                            <div reference="[object Object]" className="db-AccountSwitcher-activeImage Box-root Margin-right--8">
                                                <div className="Card-root Card--radius--circle Card--shadow--small Avatar Avatar--size--28 Box-root Box-background--white">
                                                    <div className="Avatar-inner Box-root Flex-flex Flex-alignItems--center Flex-justifyContent--center">
                                                        <div className="SVGInline SVGInline--cleaned SVG Icon Icon--business Icon-color Icon-color--gray300 Box-root Flex-flex">
                                                            <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--business-svg Icon-color-svg Icon-color--gray300-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '16px', width: '16px' }}>
                                                                <path d="M3 7.5V12h10V7.5c.718 0 1.398-.168 2-.468V15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7.032c.602.3 1.282.468 2 .468zM0 3L1.703.445A1 1 0 0 1 2.535 0h10.93a1 1 0 0 1 .832.445L16 3a3 3 0 0 1-5.5 1.659C9.963 5.467 9.043 6 8 6s-1.963-.533-2.5-1.341A3 3 0 0 1 0 3z" fillRule="evenodd" />
                                                            </svg></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="TruncatedText" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}><span className="Text-color--dark Text-fontSize--16 Text-fontWeight--medium Text-lineHeight--24 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--inline">Unnamed
                          account</span><button className="UnstyledLink ButtonLink db-AccountSwitcher-nameAccountLink IconParent Flex-flex" type="button">
                                                    <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{ position: 'relative' }}>
                                                        <div className="TextAligner" style={{ lineHeight: '20px', fontSize: '14px', flex: '0 0 auto' }} />
                                                        <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart" style={{ flex: '1 1 auto', lineHeight: 0 }}>
                                                            <div className="SVGInline SVGInline--cleaned SVG Icon Icon--edit Icon-color Icon-color--blue Box-root Margin-right--4 Flex-flex" style={{ transform: 'translateY(1.07px)' }}><svg margin="[object Object]" className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--edit-svg Icon-color-svg Icon-color--blue-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '12px', width: '12px' }}>
                                                                <path d="M15.194 4.28L11.72.805l.087-.087a2.456 2.456 0 1 1 3.473 3.473zm-1.415 1.414l-9.264 9.264L0 16l1.042-4.515 9.264-9.264z" fillRule="evenodd" />
                                                            </svg></div><span className="ButtonLink-label Text-color--blue Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block" style={{ marginTop: '-1px' }}>Add a name</span>
                                                        </div>
                                                    </div>
                                                </button></div>
                                            <div className="Box-root Margin-left--8 Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{ position: 'relative' }}>
                                                <div className="TextAligner" style={{ lineHeight: '24px', fontSize: '16px', flex: '0 0 auto' }}>
                                                </div>
                                                <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--flexStart" style={{ flex: '1 1 auto', lineHeight: 0 }}>
                                                    <div className="SVGInline SVGInline--cleaned SVG Icon Icon--chevronDown Icon-color Icon-color--gray600 Box-root Flex-flex" style={{ transform: 'translateY(0.36px)' }}><svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--chevronDown-svg Icon-color-svg Icon-color--gray600-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '12px', width: '12px' }}>
                                                        <path d="M13.591 5.293a1 1 0 0 1 1.416 1.416l-6.3 6.3a1 1 0 0 1-1.414 0l-6.3-6.3A1 1 0 0 1 2.41 5.293L8 10.884z" fillRule="evenodd" />
                                                    </svg></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="db-SideNav-navSections Box-root">
                        <div className="Box-root Flex-flex Flex-direction--column Flex-justifyContent--flexStart Flex-wrap--nowrap" style={{ marginLeft: '-16px', marginTop: '-16px' }}>
                            <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16">
                                <ul>
                                    <li style={{ transform: 'translateY(0px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/dashboard">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-home Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--home Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--home-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M9.5 15.035V11.63a.6.6 0 0 0-.607-.596H7.107a.604.604 0 0 0-.607.596v3.405h-4a.998.998 0 0 1-1-.998V7.032c0-.381.218-.729.56-.896l5.96-4.9 5.896 4.889a.997.997 0 0 1 .584.907v7.005a.998.998 0 0 1-.999.998zM8 8.835a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" fill="#A3ACB9" className="db-SideNav-iconFill--secondary" />
                                                                                <path d="M8.002 1.004a.403.403 0 0 0-.307.085L.552 6.873a.4.4 0 0 0-.06.57l.75.925c.138.17.395.2.568.06l6.192-5.015 6.193 5.015c.173.14.43.11.57-.06l.748-.926a.4.4 0 0 0-.06-.57L8.31 1.09a.403.403 0 0 0-.308-.085z" fill="#4F566B" className="db-SideNav-iconFill--primary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Home</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                    <li style={{ transform: 'translateY(0px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/account/details">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-activate Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--activate Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--activate-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M5.313 13.016a1 1 0 0 0 1.444-.035l7.582-8.32a1 1 0 0 0-1.478-1.347L6.01 10.89 2.707 7.598a1 1 0 1 0-1.412 1.418l4.019 4z" fill="#4F566B" className="db-SideNav-iconFill--primary" fillRule="evenodd">
                                                                            </path>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Activate
                                      your account</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16">
                                <ul>
                                    <li style={{ transform: 'translateY(0px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/payments?status%5B%5D=successful">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-payments Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--payments db-SideNav-icon--selected Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--payments-svg db-SideNav-icon--selected-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M11.1 10.002A2.1 2.1 0 1 0 6.9 10H1c-.552 0-1-.413-1-.923V2.923C0 2.413.448 2 1 2h12.002c.553 0 1 .413 1 .923v7.08zM7.006 4A2.003 2.003 0 1 0 7 8.006 2.003 2.003 0 0 0 7.006 4z" fill="#A3ACB9" className="db-SideNav-iconFill--secondary" />
                                                                                <path d="M15 14H3c-.552 0-1-.413-1-.923V6.923C2 6.413 2.448 6 3 6h12c.552 0 1 .413 1 .923v6.154c0 .51-.448.923-1 .923zM9.006 8A2.003 2.003 0 1 0 9 12.006 2.003 2.003 0 0 0 9.006 8z" fill="#4F566B" className="db-SideNav-iconFill--primary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--blue Text-fontSize--14 Text-fontWeight--bold Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>List
                                      Events</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                        </div>
                                    </li>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/balance/overview">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-payouts Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--payouts Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--payouts-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M5.538 3.4v5.64c0 .55-.444.996-1 .996-.552 0-1-.455-1-.995V3.414L1.712 5.241a.999.999 0 0 1-1.417.002.994.994 0 0 1 .002-1.416L3.83.295A.999.999 0 0 1 4.546 0c.259-.002.518.097.717.295l3.53 3.532c.4.4.394 1.026.003 1.416a.999.999 0 0 1-1.416-.002l-1.84-1.84z" fill="#A3ACB9" className="db-SideNav-iconFill--secondary" />
                                                                                <path d="M12.123 12.722v-5.64a.995.995 0 0 0-1-.995c-.552 0-1 .455-1 .995v5.626l-1.826-1.826a.999.999 0 0 0-1.416-.002.994.994 0 0 0 .002 1.416l3.531 3.531c.198.199.458.297.716.296a1 1 0 0 0 .717-.296l3.531-3.531c.4-.4.393-1.026.002-1.416a.999.999 0 0 0-1.416.002l-1.84 1.84z" fill="#4F566B" className="db-SideNav-iconFill--primary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Balance</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/customers">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-customers Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--customers Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--customers-svg" style={{ width: '16px', height: '16px' }} height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M13.445 13.861C12.413 12.885 10.362 12.22 8 12.22s-4.413.665-5.445 1.641a8 8 0 1 1 10.89 0zM8 9.231a3.077 3.077 0 1 0 0-6.154 3.077 3.077 0 0 0 0 6.154z" fill="#4f566b" className="db-SideNav-iconFill--primary" />
                                                                                <path d="M13.944 13.354A7.98 7.98 0 0 1 8 16a7.98 7.98 0 0 1-5.944-2.646C2.76 12.043 5.154 11.077 8 11.077s5.24.966 5.944 2.277z" fill="#4f566b" className="db-SideNav-iconFill--secondary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Customers</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16">
                                <ul>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/radar">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-radar Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--radar Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--radar-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M13.79 7.295h2.18a8 8 0 1 1-2.18-4.815zm-1.058 4.949a.419.419 0 0 0-.297.123l-1.706-7.072S9.704 3.505 7.1 3.505c-2.604 0-4.93 2.415-4.93 5.233 0 3.004 2.5 6.087 6.298 6.087 1.765 0 3.33-.778 4.455-1.788.115-.1.23-.255.23-.417 0-.233-.19-.376-.422-.376z" fill="#A3ACB9" className="db-SideNav-iconFill--secondary" />
                                                                                <path d="M16 8c0-.332-.27-.658-.6-.658-.384 0-.6.313-.6.61-.03 1.058-.41 2.376-1.151 3.394-.785 1.077-2.304 2.319-4.414 2.319-2.542 0-4.405-1.923-4.405-3.975 0-1.434.962-2.39 1.943-2.39.53 0 .827.227.988.437a.33.33 0 0 0 .494.025l5.403-5.418A7.975 7.975 0 0 1 16 8z" fill="#4F566B" className="db-SideNav-iconFill--primary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Radar</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/billing">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-subscriptions Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--subscriptions Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--subscriptions-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M8.09 16a8 8 0 1 1-.18-16 8 8 0 0 1 .18 16zm4.862-12.863a6.857 6.857 0 0 0-4.919-2.01c-3.694.03-6.73 3.01-6.819 6.699-.02.92.145 1.834.486 2.689l.2-.052a4.968 4.968 0 0 1 1.327-4.654 4.988 4.988 0 0 1 7.05 0L5.91 10.17a4.977 4.977 0 0 0 7.043-7.033l-.002.001z" fill="#A3ACB9" className="db-SideNav-iconFill--secondary" />
                                                                                <path d="M11.11 7.194A3.125 3.125 0 1 1 5.072 8.81a3.125 3.125 0 0 1 6.038-1.617z" fill="#4F566B" className="db-SideNav-iconFill--primary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Billing</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/connect/overview">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-connect Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--connect Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--connect-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M8.002 16.004A8.002 8.002 0 1 1 8.002 0c.455 0 .9.047 1.334.12V5h1.666v1.668h4.882c.073.435.12.88.12 1.334a8.002 8.002 0 0 1-8.002 8.002zm1.992-6.01H6.348a.34.34 0 0 1-.34-.34v-3.64h-2.44a.338.338 0 0 0-.24.1l-2.23 2.23a6.905 6.905 0 0 0 6.57 6.563l2.227-2.228c.063-.063.1-.15.1-.24V9.992z" fill="#A3ACB9" className="db-SideNav-iconFill--secondary" />
                                                                                <path d="M15.886 6.686L12.68 9.894a.338.338 0 0 1-.24.1H9.994V6.352a.338.338 0 0 0-.338-.338H6.009V3.559a.34.34 0 0 1 .1-.24l3.2-3.203a7.993 7.993 0 0 1 6.577 6.57z" fill="#4F566B" className="db-SideNav-iconFill--primary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Connect</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/orders">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-orders Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--orders Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--orders-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M10.614 4.28h1.029v1.914h3.107l-1.207 6.8c-.172.982-.968 1.709-1.921 1.756H4.378c-.953-.047-1.749-.775-1.921-1.756l-1.207-6.8h4.019V4.28H7.2L10.485.836a1.17 1.17 0 0 1 1.676.036c.459.481.47 1.256.027 1.753zM5.73 12.723l-.534-2.871a.776.776 0 0 0-.756-.667.574.574 0 0 0-.414.265.627.627 0 0 0-.074.503l.534 2.87c.054.378.374.66.756.667a.574.574 0 0 0 .415-.265.627.627 0 0 0 .075-.502zm2.982-2.796c0-.406-.314-.735-.702-.736h-.018c-.387 0-.7.33-.7.735V12.8c0 .406.313.735.7.736h.018c.389 0 .703-.33.703-.736V9.924zm1.502 2.795a.627.627 0 0 0 .074.502.574.574 0 0 0 .414.265.776.776 0 0 0 .756-.667l.535-2.87a.627.627 0 0 0-.075-.502.574.574 0 0 0-.413-.265.776.776 0 0 0-.756.667z" fill="#A3ACB9" className="db-SideNav-iconFill--secondary" />
                                                                                <path d="M14.094 8H1.906C1.13 8 .5 7.37.5 6.594v-.938c0-.776.63-1.406 1.406-1.406h5.27l-.695.697A1.244 1.244 0 0 0 8.237 6.71l2.454-2.46h3.403c.776 0 1.406.63 1.406 1.406v.938C15.5 7.37 14.87 8 14.094 8z" fill="#4F566B" className="db-SideNav-iconFill--primary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Orders</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/terminal">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-terminal Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--terminal Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--terminal-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <g fill="none">
                                                                                <path d="M13 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h10z" fill="#87bbfd">
                                                                                </path>
                                                                                <path d="M12 2l3.93 7A8 8 0 0 1 .07 9L4 2zM3 8v4.23c0 .46.21.894.57 1.18a7 7 0 0 0 8.86 0c.36-.286.57-.72.57-1.18V8z" fill="#A3ACB9" className="db-SideNav-iconFill--secondary" />
                                                                                <path d="M8 0A8 8 0 0 0 .07 9h15.86A8 8 0 0 0 8 0zM3 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2z" fill="#4F566B" className="db-SideNav-iconFill--primary" />
                                                                            </g>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Terminal</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16">
                                <ul>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/test/developers">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-api Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--api Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--api-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0 11.173V3.307A1.31 1.31 0 0 1 1.31 2h13.38c.724 0 1.31.579 1.31 1.307v9.386A1.31 1.31 0 0 1 14.69 14H1.31C.585 14 0 13.421 0 12.693zm2.348-4.006a.594.594 0 0 0-.295.788c.13.294.486.44.783.308l2.576-1.147c.3-.133.83-.53.957-1.06-.127-.53-.657-.927-.957-1.06L2.836 3.849a.601.601 0 0 0-.488 1.096L5.19 6.056l-2.84 1.11z" fill="#4F566B" className="db-SideNav-iconFill--primary" fillRule="evenodd">
                                                                            </path>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Developers</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16">
                                <ul>
                                    <li style={{ transform: 'translateY(32px)', transition: 'transform 100ms cubic-bezier(0.7, 0, 0.3, 1) 0s' }}>
                                        <div style={{ position: 'relative' }}>
                                            <div><a className="db-SideNav-link" href="https://dashboard.stripe.com/settings">
                                                <div tabIndex={-1} style={{ outline: 'none' }}>
                                                    <div className="db-SideNav-icon-settings Box-root">
                                                        <div className="NavItem Box-root Box-background--surface Padding-horizontal--4 Padding-vertical--4">
                                                            <div className="Box-root Flex-flex Flex-alignItems--center">
                                                                <div className="Box-root Margin-right--12 Padding-all--2 Flex-flex Flex-alignItems--center">
                                                                    <div className="SVGInline SVGInline--cleaned SVG db-SideNav-icon db-SideNav-icon--settings Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg db-SideNav-icon-svg db-SideNav-icon--settings-svg" style={{ width: '16px', height: '16px' }} height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M14.197 7.017c-.23 0-1.607 0-2.18-.695 0-.115-.115-.115-.115-.231-.115-.81.918-1.851 1.032-1.967.23-.231.23-.579.115-.694-.115-.116-.574-.579-.688-.81-.115-.232-.46-.116-.689.116-.23.23-1.147 1.157-1.95 1.04-.115 0-.115-.115-.23-.115-.689-.463-.689-1.851-.689-2.082 0-.348-.114-.579-.344-.579H7.311c-.229 0-.344.231-.344.579 0 .23 0 1.62-.688 2.198-.115 0-.115.116-.23.116-.803 0-1.721-.926-1.95-1.157-.23-.232-.574-.232-.69-.116-.114.231-.573.694-.802.81-.115.115-.115.463.114.694.23.231 1.148 1.157 1.033 1.967 0 .116-.115.116-.115.231-.459.695-1.836.695-2.065.695-.344 0-.574.115-.574.347v1.041c0 .231.23.463.574.463.23 0 1.606 0 2.18.694 0 .116.115.116.115.231.115.81-.918 1.852-1.033 1.967-.23.232-.23.579-.115.695.115.115.574.578.689.81.115.115.459.115.688-.116.23-.232 1.148-1.157 1.951-1.042.115 0 .115.116.23.116.688.579.688 1.851.688 2.198 0 .232.23.579.46.579h1.032c.23 0 .459-.231.459-.579 0-.23 0-1.62.689-2.198.114 0 .114-.116.23-.116.802-.115 1.835.926 1.95 1.042.23.231.574.231.688.115l.804-.81c.114-.115.114-.462-.115-.694-.23-.231-1.148-1.157-1.033-1.967 0-.115.115-.115.115-.231.574-.694 1.836-.694 2.18-.694.23 0 .574-.232.574-.463V7.364c-.23-.232-.459-.347-.803-.347zm-6.312 3.47c-1.377 0-2.524-1.156-2.524-2.545 0-1.388 1.147-2.545 2.524-2.545s2.525 1.157 2.525 2.545c0 1.389-1.148 2.546-2.525 2.546z" fill="#4F566B" className="db-SideNav-iconFill--primary" fillRule="evenodd">
                                                                            </path>
                                                                        </svg></div>
                                                                </div><span className="Text-color--dark Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>Settings</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a></div>
                                            <div className="db-SideNav-item--root"><span /></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="Box-root Box-hideIfEmpty Margin-top--16 Margin-left--16">
                                <ul>
                                    <li aria-hidden="true" style={{ transform: 'translateY(32px)' }} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftMenu;