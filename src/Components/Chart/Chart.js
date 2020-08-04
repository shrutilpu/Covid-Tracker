import React,{Component} from 'react';
import classes from './Chart.css';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

class Chart extends Component{

 state ={
  
  labels:[],
  datasets:[
   {
    label: ' Confirmed cases ',
    backgroundColor: 'rgba(32, 151, 175,0.7)',
    fill:true,
    borderColor: '#000',
    borderWidth: 2,
   //data=[12,13]
   },
   {
    label: ' deaths ',
    backgroundColor: 'rgba(194, 20, 20,0.7)',
    fill:true,
    borderColor: '#000',
    borderWidth: 2,
   //data=[12,13]
   }
   
  ]
 }
 componentDidMount(){
  axios.get('https://covid19.mathdro.id/api/daily').then(res=>{
   const n = res.data.length;
   const data = res.data.slice(n-60).map(e=>{
    return e.confirmed.total;
   });
   const Dates = res.data.slice(n-60).map(e=>{
    return e.reportDate;
   });
   const Data2 = res.data.slice(n-60).map(e=>{
    return e.deaths.total;
   })
   this.setState(prevState=>({labels:[...Dates],datasets:[{...prevState.datasets[0],data},{...prevState.datasets[1],data:Data2}]}))
  })
 }
 render()
 {let chart = null;
  if(this.state.labels)
  {
   chart=<Line
   data ={this.state}
   options={{
    title:{
     display:true,
     text:'Global representation Covid-19',
     fontSize:20
    },
    legend:{
     display:true,
     position:'bottom'
    },
    maintainAspectRatio:false
   }}
 />
  }
  return (
   <div className={classes.Chart}>
    {chart}
   </div>
  );
 }
}
export default Chart;