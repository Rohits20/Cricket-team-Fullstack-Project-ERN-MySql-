import React, { useState ,useEffect} from 'react'
import CricketerService from '../services/CricketerService'
import { createContext } from 'react';
import './AllCricketers';

export const ListCricketerComponent = () => {

    const [cricketer,setCricketer] =useState([])
    
    useEffect(() => {
 getAllCricketer();
    
    }, [])
var myData= [];
const getAllCricketer=()=>{
    CricketerService.getAllCricketer().then((response) => {
        setCricketer(response.data)
        console.log(response.data);
        myData =response.data;
        console.log(myData.length);
        if(myData.length>3){
            console.log("Sufficient no of players are there");
        }
    }).catch(error =>{
        console.log(error);
    });
    
}

const deleteCricketer=(cricketerId)=>{
    CricketerService.deleteCricketer(cricketerId).then((response)=>{
        getAllCricketer();
    }).catch(error=>{
        console.log(error);
    })
}

  return (
    <div className='containerA'>
  
 <table >
   <thead>
       
       <th>Name</th>
       <th>Rating</th>
   </thead>
   <tbody>
       {
           cricketer.map(
               cricketer=>
               <tr key ={cricketer.id}>
               
               <td>{cricketer.name}</td>
               <td>{cricketer.rating}</td>
               <button onClick={
                   ()=> deleteCricketer(cricketer.id)
               }>
         Remove {cricketer.name} 
         </button></tr>
           )
       }
   </tbody>
   </table>
   </div>
   
  )
}

export default ListCricketerComponent