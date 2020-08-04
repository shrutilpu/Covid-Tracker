import React,{Component} from 'react';
import classes from './Precaution.css';


import Precaution from './Precautions';
import wash from '../../Images/washHands.png';
import stay from '../../Images/stayHome.jpg';
import social from '../../Images/socialDistance.jpg';

class Precautions extends Component{
 state={
  Image:[
   {img:wash,text:"Wash Your Hands"},
   {img:social,text:"maintain social distancing"},
   {img:stay,text:"Stay Home Stay Safe"}
  ]
 }
 render(){
  const Precautions = this.state.Image.map(pre=>{
   return <Precaution key={pre.text} img={pre.img} content={pre.text}/>
  })
  return(
   <div className={classes.Precaution}>
    {Precautions}
   </div>
  );
 }
}
export default Precautions;