import React,{Component} from 'react';
import classes from './Covid.css';

import axios from '../../axios.js/axios';
import Cards from '../../Components/CardDiplay/Card';
import Chart from '../../Components/Chart/Chart';
import India from '../India/India';
import Precautions from '../../Components/Precautions/Precaution';

class Covid extends Component {
 state={
  covidCase:[]
 }

 componentDidMount()
 {
   axios.get('summary').then(res=>{
   const result = Object.entries(res.data.Global);
   const globalData = result.map(item=>{
     return {key :item[0],value:item[1]}
   });

     this.setState({covidCase:globalData})
     //console.log(this.state.covidCase);
   });
 }
 render() {
   let cards = null;
   if(this.state.covidCase)
  { cards = this.state.covidCase.map(
    covid =>{
     return <Cards key={covid.key} title={covid.key} Content={covid.value}/>
    }
   );}
   return (
     <div className={classes.Covid}>
       <section className={classes.Cards}>
      {cards}
       </section>
      <section className={classes.chart}>
      <Chart/>
      </section>
      <section className={classes.India}> 
       <India/>
      </section>
      <section className={classes.Precautions}>
       <Precautions/>
      </section>
      <section className={classes.Essentials}>
        Do's and Dont's
      </section>
     </div>
   );
 }
}

export default Covid;