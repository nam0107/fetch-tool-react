import React, { Component } from 'react'

class TabAboveTable extends Component {
    render() {
        return (
            <div className="Box-root Margin-bottom--12">
                <div className="Card-root Card--radius--all Card--shadow--medium Box-root Box-background--white Flex-flex Flex-justifyContent--center">
                    <div className="ContentTab ContentTab--active ContentTab--grow Box-root Box-background--white Box-divider--light-right-1">
                        <div tabIndex={-1} style={{ outline: 'none' }}>
                            <div className="Box-root Flex-flex"><a aria-selected="true" className="UnstyledLink ContentTab-link" role="tab" href="https://dashboard.stripe.com/test/payments?status%5B%5D=successful">
                                <div className="ContentTab-inner ContentTab-inner--active ContentTab-inner--activeTop Box-root Padding-horizontal--20 Padding-vertical--16">
                                    <span className="Text-color--blue Text-align--center Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"><span className="ContentTab-text"><span>Succeeded</span></span></span>
                                    <div className="ContentTab-chip ContentTab-chip--default Box-root Box-background--blue">
                                    </div>
                                </div>
                            </a></div>
                        </div>
                    </div>
                    <div className="ContentTab ContentTab--grow Box-root Box-background--offset Box-divider--light-right-1">
                        <div tabIndex={-1} style={{ outline: 'none' }}>
                            <div className="Box-root Flex-flex"><a aria-selected="false" className="UnstyledLink ContentTab-link" role="tab" tabIndex={-1} href="https://dashboard.stripe.com/test/payments?status%5B%5D=refunded&status%5B%5D=partially_refunded">
                                <div className="ContentTab-inner Box-root Padding-horizontal--20 Padding-vertical--16">
                                    <span className="Text-color--gray Text-align--center Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"><span className="ContentTab-text"><span>Refunded</span></span></span>
                                    <div className="ContentTab-chip ContentTab-chip--default Box-root Box-background--blue">
                                    </div>
                                </div>
                            </a></div>
                        </div>
                    </div>
                    <div className="ContentTab ContentTab--grow Box-root Box-background--offset Box-divider--light-right-1">
                        <div tabIndex={-1} style={{ outline: 'none' }}>
                            <div className="Box-root Flex-flex"><a aria-selected="false" className="UnstyledLink ContentTab-link" role="tab" tabIndex={-1} href="https://dashboard.stripe.com/test/payments?status%5B%5D=uncaptured">
                                <div className="ContentTab-inner Box-root Padding-horizontal--20 Padding-vertical--16">
                                    <span className="Text-color--gray Text-align--center Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"><span className="ContentTab-text"><span>Uncaptured</span></span></span>
                                    <div className="ContentTab-chip ContentTab-chip--default Box-root Box-background--blue">
                                    </div>
                                </div>
                            </a></div>
                        </div>
                    </div>
                    <div className="ContentTab ContentTab--grow Box-root Box-background--offset Box-divider--light-right-1">
                        <div tabIndex={-1} style={{ outline: 'none' }}>
                            <div className="Box-root Flex-flex"><a aria-selected="false" className="UnstyledLink ContentTab-link" role="tab" href="https://dashboard.stripe.com/test/payments" tabIndex={-1}>
                                <div className="ContentTab-inner Box-root Padding-horizontal--20 Padding-vertical--16">
                                    <span className="Text-color--gray Text-align--center Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block"><span className="ContentTab-text"><span>All</span></span></span>
                                    <div className="ContentTab-chip ContentTab-chip--default Box-root Box-background--blue">
                                    </div>
                                </div>
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabAboveTable;