import React, {Component} from 'react';
import LeftMenu from './Component/LeftMenu'
import RightMenu from './Component/RightMenu'

class App extends Component {

  render(){
    return(
      <div className = "db-World-scrollWrapper">
        <LeftMenu />
        <RightMenu />
      </div>
    );
  }
}

export default App;
