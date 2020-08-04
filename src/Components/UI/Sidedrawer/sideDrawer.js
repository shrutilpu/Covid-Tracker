import React from 'react';
import Navigation from '../../Links/navigation';
import classes from './sideDrawer.css';
import Backdrop from '../Backdrop/backdrop';
import Aux from '../../../Hoc/Aux';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop clicked={props.close} show={props.open}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    Covid-Tracker
                </div>
                <nav>
                    <Navigation />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;