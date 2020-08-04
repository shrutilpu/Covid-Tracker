import React from 'react';
import classes from './Precautions.css';
const precaution = (props)=>{
return (
<article className={classes.Precautions}>
 <img src ={props.img} alt='precautions'></img>
  <div>{props.content}</div>
</article>
);
}
export default precaution;