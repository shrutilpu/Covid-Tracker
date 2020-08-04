import React from 'react';
import classes from './Card.css'
const card =(props)=>{
return (
 <article className={classes.Card}>
  <h1>{props.title}</h1>
  <div className={classes.Content}>
    {props.Content}
  </div>
 </article>
);

}
export default card;