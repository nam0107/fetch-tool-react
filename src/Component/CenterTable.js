import React, { Component } from 'react'
import TabAboveTable from './TabAboveTable'
import RowInTable from './RowInTable'

class CenterTable extends Component {
    render() {
        return (
            <div tabIndex={-1} className="db-World-mainPane Box-root Padding-right--20">
                <div role="main" className="db-World-contentPane Box-root Padding-bottom--48">
                    <div>
                        <TabAboveTable />
                        <div className="Card-root Card--radius--all Card--shadow--medium Box-root Box-background--white">
                            <div className="db-ListView db-ListView--withFooter">
                                <div className="Box-root Box-divider--light-bottom-1 Padding-horizontal--20 Padding-vertical--16 Flex-flex Flex-justifyContent--spaceBetween">
                                    <div className="bs-FilterControl"><span className="bs-FilterControl-buttonContainer">
                                        <div className="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white bs-FilterControl-btn Box-root Flex-inlineFlex" style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px' }}>
                                            <div className="PressableCore-base Box-root"><button className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto" type="button" style={{ color: 'rgb(60, 66, 87)' }}>
                                                <div className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{ position: 'relative' }}>
                                                    <div className="TextAligner" style={{ lineHeight: '20px', fontSize: '14px', flex: '0 0 auto' }}>
                                                    </div>
                                                    <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center" style={{ width: '100%', flex: '1 1 auto', lineHeight: 0 }}>
                                                        <div className="Box-root Padding-right--8">
                                                            <div className="SVGInline SVGInline--cleaned SVG Icon Icon--filter Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex" style={{ transform: 'translateY(1.07px)' }}><svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--filter-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '12px', width: '12px' }}>
                                                                <path d="M13.994.004c.555 0 1.006.448 1.006 1a.997.997 0 0 1-.212.614l-5.782 7.39L9 13.726a1 1 0 0 1-.293.708L7.171 15.97A.1.1 0 0 1 7 15.9V9.008l-5.788-7.39A.996.996 0 0 1 1.389.214a1.01 1.01 0 0 1 .617-.21z" fillRule="evenodd" />
                                                            </svg></div>
                                                        </div><span className="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block" style={{ marginTop: '-1px' }}>
                                                            <div className="Box-root Flex-flex Flex-alignItems--center"><span>Filter</span>
                                                                <div className="Box-root Box-divider--light-left-1 Margin-left--8 Padding-left--8">
                                                                    <span className="Text-color--blue Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--16 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span>1</span></span>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button></div>
                                            <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                                            </div>
                                        </div>
                                    </span></div>
                                    <div className="Box-root">
                                        <div className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap" style={{ marginLeft: '-8px', marginTop: '-8px' }}>
                                            <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                                                <div className="Box-root">
                                                    <div className="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex" style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px' }}>
                                                        <div className="PressableCore-base Box-root"><button className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto" type="button" style={{ color: 'rgb(60, 66, 87)' }}>
                                                            <div className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{ position: 'relative' }}>
                                                                <div className="TextAligner" style={{ lineHeight: '20px', fontSize: '14px', flex: '0 0 auto' }} />
                                                                <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center" style={{ width: '100%', flex: '1 1 auto', lineHeight: 0 }}>
                                                                    <div className="Box-root Padding-right--8">
                                                                        <div className="SVGInline SVGInline--cleaned SVG Icon Icon--new Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex" style={{ transform: 'translateY(1.07px)' }}><svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--new-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '12px', width: '12px' }}>
                                                                            <path d="M9 7h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6V1a1 1 0 1 1 2 0z" fillRule="evenodd" />
                                                                        </svg></div>
                                                                    </div><span className="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block" style={{ marginTop: '-1px' }}><span>New</span></span>
                                                                </div>
                                                            </div>
                                                        </button></div>
                                                        <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                                                <div>
                                                    <div>
                                                        <div className="db-BackboneViewContainer">
                                                            <div className="export-modal-button-view react-view"><span>
                                                                <div>
                                                                    <div>
                                                                        <div className="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex" style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px' }}>
                                                                            <div className="PressableCore-base Box-root"><button data-db-analytics-name="list_views.header.export.filter" className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto" type="button" style={{ color: 'rgb(60, 66, 87)' }}>
                                                                                <div className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{ position: 'relative' }}>
                                                                                    <div className="TextAligner" style={{ lineHeight: '20px', fontSize: '14px', flex: '0 0 auto' }}>
                                                                                    </div>
                                                                                    <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center" style={{ width: '100%', flex: '1 1 auto', lineHeight: 0 }}>
                                                                                        <div className="Box-root Padding-right--8">
                                                                                            <div className="SVGInline SVGInline--cleaned SVG Icon Icon--export Button-icon Icon-color Icon-color--gray600 Box-root Flex-flex" style={{ transform: 'translateY(1.07px)' }}><svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--export-svg Button-icon-svg Icon-color-svg Icon-color--gray600-svg" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" style={{ height: '12px', width: '12px' }}>
                                                                                                <path d="M15 10.006a1 1 0 1 1-2 0v-5.6L2.393 15.009a.992.992 0 1 1-1.403-1.404L11.595 3.002h-5.6a1 1 0 0 1 0-2.001h8.02a1 1 0 0 1 .284.045.99.99 0 0 1 .701.951z" fillRule="evenodd" />
                                                                                            </svg></div>
                                                                                        </div><span className="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block" style={{ marginTop: '-1px' }}><span>Export</span></span>
                                                                                    </div>
                                                                                </div>
                                                                            </button></div>
                                                                            <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div>
                                                                                <div className="db-BackboneViewContainer">
                                                                                    <div className="chrome-modals-view react-view"><span>
                                                                                        <div />
                                                                                    </span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className="Table">
                                    <thead className="Table-head">
                                        <tr className="Table-row db-ListViewItem db-ListViewItem-header">
                                            <td id="batch" className="Table-cell Table-cell--align--center Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
                                                    <div className="db-BatchCell Box-root Flex-flex Flex-alignItems--center" style={{ minHeight: '20px' }}>
                                                        <div className="PressableControlLabel Checkbox Box-root">
                                                            <div className="PressableCore PressableCore--cursor--pointer PressableCore--radius--all PressableCore--width PressableControl Box-root Flex-inlineFlex" style={{ backgroundColor: 'rgb(255, 255, 255)', height: '14px', boxShadow: 'rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px', minWidth: '14px', width: '14px' }}>
                                                                <div className="PressableCore-base Box-root"><input className="Checkbox-source PressableContext PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--regular PressableContext--height PressableContext--radius--all PressableContext--width" id="checkbox109" type="checkbox" />
                                                                    <div className="SVGInline SVGInline--cleaned SVG Checkbox-mark Box-root Flex-flex">
                                                                        <svg className="SVGInline-svg SVGInline--cleaned-svg SVG-svg Checkbox-mark-svg" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" style={{ height: '14px', width: '14px' }}>
                                                                            <path fill="#FFF" d="M10.346 3.301a.929.929 0 0 1 1.37 0 1.076 1.076 0 0 1 0 1.456l-4.64 4.94a.929.929 0 0 1-1.37 0L3.284 7.123a1.076 1.076 0 0 1 0-1.456.929.929 0 0 1 1.37 0L6.39 7.513l3.955-4.212z">
                                                                            </path>
                                                                        </svg></div>
                                                                </div>
                                                                <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td id="amount" className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-align--right Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--block"><span>Events</span></span>
                                                </div>
                                            </td>
                                            <td id="currency" className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline"><span /></span>
                                                </div>
                                            </td>
                                            <td id="status" type="badge" className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline"><span /></span>
                                                </div>
                                            </td>
                                            <td className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--auto Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline"><span>Email
                                Subject</span></span>
                                                </div>
                                            </td>
                                            <td className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--auto Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline"><span>Creater</span></span>
                                                </div>
                                            </td>
                                            <td id="created" className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--inline"><span>Date</span></span>
                                                </div>
                                            </td>
                                            <td id="overflow" type="action" className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-align--right Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--upper Text-wrap--wrap Text-display--block"><span /></span>
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className="Table-body">
                                        {/* Row  */}
                                        <RowInTable />
                                    </tbody>
                                </table>
                                <div className="Box-root Flex-flex Flex-alignItems--center Flex-justifyContent--spaceBetween">
                                    <div className="Box-root Padding-all--20 Flex-flex Flex-alignItems--center"><span className="Text-color--default Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline"><span><span><strong>98</strong>
                                        results</span></span></span></div>
                                    <div className="Box-root Padding-horizontal--20 Padding-vertical--16">
                                        <div className="Box-root">
                                            <div className="Box-root Flex-flex Flex-direction--row Flex-justifyContent--flexStart Flex-wrap--nowrap" style={{ marginLeft: '-8px', marginTop: '-8px' }}>
                                                <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                                                    <div className="PressableCore PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Is--disabled Box-root Flex-inlineFlex" style={{ backgroundColor: 'rgb(247, 250, 252)', boxShadow: 'rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px' }}>
                                                        <div className="PressableCore-base Box-root"><button data-db-analytics-name="list_view.pagination.previous" className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto" disabled type="button" style={{ color: 'rgb(163, 172, 185)' }}>
                                                            <div className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{ position: 'relative' }}>
                                                                <div className="TextAligner" style={{ lineHeight: '20px', fontSize: '14px', flex: '0 0 auto' }} />
                                                                <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center" style={{ width: '100%', flex: '1 1 auto', lineHeight: 0 }}><span className="Button-label Text-color--disabled Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block" style={{ marginTop: '-1px' }}><span>Previous</span></span></div>
                                                            </div>
                                                        </button></div>
                                                        <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="Box-root Box-hideIfEmpty Margin-top--8 Margin-left--8">
                                                    <div className="PressableCore PressableCore--cursor--pointer PressableCore--height--medium PressableCore--radius--all PressableCore--width PressableCore--width--auto PressableButton Button Button--color--white Box-root Flex-inlineFlex" style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgba(60, 66, 87, 0.12) 0px 2px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px' }}>
                                                        <div className="PressableCore-base Box-root"><a data-db-analytics-name="list_view.pagination.next" className="UnstyledLink Button-element PressableContext Padding-horizontal--8 Padding-vertical--4 PressableContext--cursor--pointer PressableContext--display--inlineFlex PressableContext--fontLineHeight--20 PressableContext--fontSize--14 PressableContext--fontWeight--medium PressableContext--height PressableContext--height--medium PressableContext--radius--all PressableContext--width PressableContext--width--auto" href="https://dashboard.stripe.com/test/payments?status%5B%5D=successful&starting_after=ch_1FCi8HG1Nt1ZD4f43aU3xVW9" style={{ color: 'rgb(60, 66, 87)' }}>
                                                            <div className="Button-align Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row" style={{ position: 'relative' }}>
                                                                <div className="TextAligner" style={{ lineHeight: '20px', fontSize: '14px', flex: '0 0 auto' }} />
                                                                <div className="Box-root Flex-flex Flex-alignItems--baseline Flex-direction--row Flex-justifyContent--center" style={{ width: '100%', flex: '1 1 auto', lineHeight: 0 }}><span className="Button-label Text-color--default Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-numericSpacing--proportional Text-typeface--base Text-wrap--noWrap Text-display--block" style={{ marginTop: '-1px' }}><span>Next</span></span></div>
                                                            </div>
                                                        </a></div>
                                                        <div className="PressableCore-overlay PressableCore-overlay--extendBy1 Box-root Box-background--white">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CenterTable;