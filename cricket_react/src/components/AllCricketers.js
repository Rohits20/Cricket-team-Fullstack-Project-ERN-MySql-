import React from 'react'
import '../App.css';
import CricketerService from '../services/CricketerService';
import { createContext } from 'react';
import  { useState ,useEffect} from 'react'
import CricketersData from './Data'



const handleClick = () => {
  window.location.reload();  
};

const AllCricketers = () => {
  var count=0;
  function icrement(){
    count=count+1;
  }
  const [cricketer,setCricketer] =useState([])
    
    useEffect(() => {
 getAllCricketer();
    }, [])


const getAllCricketer=()=>{
    CricketerService.getAllCricketer().then((response) => {
        setCricketer(response.data)
        getAllCricketer();
      //  console.log(myData.length);
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
 <div className='containerB'>
     <table 
     className='addTable'
     striped bordered hover variant="dark">
     <thead>
    <tr>
      <th>Player name</th>
      <th></th>         
      <th>Rating </th>
    </tr>
  </thead>
    <tbody>
    {
            CricketersData.map(
                CricketersData=>
                <tr key ={CricketersData.id}>
                
                <td>{CricketersData.name}</td>
                <th></th>
               
                <td>{CricketersData.rating}</td>
                <th></th>
                <th></th>
                <th></th>
                <button 
               className="buttonAdd"
                onClick={
                    ()=> {
                      if(count<3){
                        icrement();
                    CricketerService.createCricketer({name:CricketersData.name,rating: CricketersData.rating});
                  }
                
                  }
               }>
          Add {CricketersData.name} 
          </button></tr>
            )
        }
    </tbody>




</table>
<div className='containerA'>
  <h3>Selected Players</h3>
  <table className='deleteTable' >
    <thead className='tabled'>
      
        <th>Name</th>
          
        <th>Rating</th>
        
    </thead>
    <tbody>
        {
            cricketer.map(
                cricketer=>
                <tr key ={cricketer.id}>
                
                <td>{cricketer.name}</td>
                <th>  </th>
               
                
                <td>{cricketer.rating}</td>
                <th>     </th>
                <th>  </th>
                <th>  </th>
                <th>  </th>
                <th>  </th>
                <button 
                className='buttonDelete'
                onClick={
                    ()=> {
                      deleteCricketer(cricketer.id)
                    count--;
                    }
                }>
          Remove {cricketer.name} 
          </button></tr>
            )
        }
    </tbody>
    </table>
    </div>
  </div>
  
  )
}

export default AllCricketers