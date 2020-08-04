import React from 'react';
import classes from './Links.css';
const link =(props)=>{
return (
 <div className={classes.Link}>
  <a href={props.link}>{props.name}</a>
 </div>
);
}
export default link;