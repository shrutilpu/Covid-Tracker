import React, { Component } from 'react';
import classes from './App.css';

import Covid from './Containers/Covid.js/Covid';
import Link from './Components/Links/navigation';
import DrawerToggle from './Components/UI/Sidedrawer/Drawertoggle/drawerToggle';
import Sidedrawer from './Components/UI/Sidedrawer/sideDrawer';

class App extends Component {
  
  state={
    showSideDrawer:false
  }
  closeSideDrawerHandler=()=>{
    this.setState({showSideDrawer:false});
  }
  showSideDrawerHandler=()=>{
    const show = this.state.showSideDrawer;
    this.setState({showSideDrawer:!show})
  }
  render() {
    
    return (
      <div className= {classes.App}>
        <header className={classes.Appheader}>
        <h1 className="App-title">Covid-Tracker</h1>
          <DrawerToggle clicked={this.showSideDrawerHandler}/>
          <Sidedrawer  open={this.state.showSideDrawer}
                        close={this.closeSideDrawerHandler}/>
            <div className={classes.nav}>
            <Link/>
            </div>
              
        </header>
        <div className={classes.Covid}>
        <Covid/>
        </div>
        
      </div>
    );
  }
}

export default App;
