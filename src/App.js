import React, { Component } from 'react';
import classes from './App.css';

import Covid from './Containers/Covid.js/Covid';
import Link from './Components/Links/navigation';
import DrawerToggle from './Components/UI/Sidedrawer/Drawertoggle/drawerToggle';
import Sidedrawer from './Components/UI/Sidedrawer/sideDrawer';
import {Route,Switch} from 'react-router-dom';
import India from './Containers/India/India';
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
        <Switch>
        <Route path="/india"><India/></Route>
        <Route path="/"><Covid/></Route>
        </Switch>
        
        
        
      </div>
    );
  }
}

export default App;
