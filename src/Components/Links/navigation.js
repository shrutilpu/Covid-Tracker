import React from 'react';
import Link from './Links'

const links=()=>{
   return (
       <div>
        <Link link='/' name='Home'/>
        <Link link='/india' name='India'/>
        <Link link='/precautions' name='Precautions'/>
       </div>
   );
 
}

export default links;
