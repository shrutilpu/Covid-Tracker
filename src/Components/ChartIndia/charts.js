import React ,{Component}from 'react';
import {Bar}  from 'react-chartjs-2';

class charts extends Component{
 state={
  labels:['confirmed','active','deaths','recovered'],
  datasets:[{
   label: ' Covid ',
    backgroundColor: 'rgba(32, 151, 175,0.7)',
    borderColor: '#000',
    borderWidth: 2,
    data:[]
  }]
 }
 componentDidMount(){
  if(!this.state.datasets[0].data || this.props.data!==this.state.datasets[0].data){
    this.setState(prev=>({datasets:[{...prev.datasets[0],data:this.props.data}]}));
 }
}
componentDidUpdate(){
 if(!this.state.datasets[0].data || this.props.data!==this.state.datasets[0].data){
  this.setState(prev=>({datasets:[{...prev.datasets[0],data:this.props.data}]}));
 }
}
 render(){
  return (
   <Bar
   data ={this.state}
   options={{
    title:{
     display:true,
     text:'Local representation Covid-19',
     fontSize:20
    },
    legend:{
     display:true,
     position:'bottom'
    },
    maintainAspectRatio:false
   }}
   />
  );
 }

}
export default charts;