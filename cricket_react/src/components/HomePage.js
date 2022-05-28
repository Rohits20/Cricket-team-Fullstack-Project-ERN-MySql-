import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from'./HeaderComponent';
import AllCricketers from'./AllCricketers';
import FooterComponent from'./FooterComponent'

const HomePage = () => {
  return (
    <div className='bigContainer'>
    <HeaderComponent/>
    <div className='container'>
      <AllCricketers/>
    </div>
    <FooterComponent/>
  
  </div>
  )
}

export default HomePage