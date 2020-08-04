import React,{Component} from 'react';
import classes from './chartIndia.css';

import axios from'axios';
import Charts from './charts';
class chartIndia extends Component{
 state={
  caseData:[],
  charts:null
  //data:[]
 }
 componentDidMount(){
  axios.get('https://api.covid19india.org/data.json').then(res=>{
   if(!this.state.caseData|| this.state.caseData !== res.data.statewise)
   {this.setState({caseData:res.data.statewise,charts:<Charts data=
    {[res.data.statewise[0].confirmed,res.data.statewise[0].active,
    res.data.statewise[0].deaths,res.data.statewise[0].recovered]}/>});}
  });
 }
 changeHandler=(index)=>{
  const dat = this.state.caseData[index];
  let data=null;
  //console.log(index)
  if(dat && (!data || data[0]!== dat.confirmed))
    {
    data=[dat.confirmed,dat.active,dat.deaths,dat.recovered]
    if(data)
    {
     //console.log(data);
     this.setState({charts :<Charts data={data}/>}) ;
    }
   }
 }
 render(){
  let options = null;
  if(this.state.caseData)
  {
   options=this.state.caseData.map((cased,index)=>{
   return <option value={index} key={cased.state}>{cased.state}</option>
   });
   
  }
  return(
  <div className={classes.Selector}>
    <div className={classes.Selection}> 
    <select onChange={e=>this.changeHandler(e.target.value)} 
   placeholder='select state'
   >
    {options}
   </select>
    </div>
    <div className={classes.Chart}>
    {this.state.charts}
    </div>
   
  </div>);
 }
}
export default chartIndia ;