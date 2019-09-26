import React, { Component } from 'react';
import SearchBar from './Search/SearchBar'
import CenterTable from './Table/CenterTable';


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