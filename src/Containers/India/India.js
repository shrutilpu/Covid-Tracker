import React,{Component} from 'react';
import classes from './India.css';

import axios from '../../axios.js/axios';
import Cards from '../../Components/CardDiplay/Card';
import Chart from '../../Components/ChartIndia/ChartIndia';
class India extends Component{

 state ={
  cases:[]
 }

componentDidMount(){
   axios.get('/total/country/India').then(res=>{
    const data = res.data.slice(res.data.length-1);
    const result = Object.entries(data[0]);
    const finaldata= result.map(item=>{
     return {key:item[0],value:item[1]}
    });
    this.setState({cases:finaldata.slice(7,11)});
    //console.log(this.state.cases);
   })
}

 render()
 {let card = null;
  if(this.state.cases)
  {
   card=this.state.cases.map(
   covid=>{return <Cards key ={covid.key} title={covid.key} Content = {covid.value}/>}
   );
  }
  
  return (
   <div className={classes.India}>
    <header className={classes.IndiaHeader}>
    <h1> India </h1>
    </header>
    <section className={classes.India}>{card}</section>
   <section className={classes.Chart}>
    <Chart/>
   </section>
   </div>
   
  );
 }
}
export default India;