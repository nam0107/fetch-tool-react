import React, { Component } from 'react';
import SearchBar from './SearchBar'
import CenterTable from './CenterTable'


class RightMenu extends Component {
    render() {
        return (
            <div className="db-World-mainWrapper Box-root">
                <SearchBar />
                <CenterTable />
            </div>
        );
    }
}

export default RightMenu;