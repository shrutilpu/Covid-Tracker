import React from 'react';
import classes from './Links.css';
import {Link} from 'react-router-dom';
const link =(props)=>{
return (
 <div className={classes.Link}>
  <Link to={props.link}>{props.name}</Link>
 </div>
);
}
export default link;