import React from 'react'
import './SideBar.css';


import icon1 from './assets/icon1.svg';
import icon2 from './assets/icon2.svg';
import icon3 from './assets/icon3.svg';
import icon4 from './assets/icon4.svg';
import icon5 from './assets/icon5.svg';
import arrow from './assets/arrow_back.svg';
import logo from './assets/logo.svg';


function SideBar() {
  return (
    <aside>
      <img src={logo} className='logo' alt='logo'></img>
      <div className='icons'>
        <img src={icon2} alt='checklist icon'></img>
        <img src={icon1} alt='calendar icon'></img>
        <img src={icon5} alt='file icon'></img>
        <img src={icon4} alt='contact icon'></img>
        <img src={icon3} alt='caution icon'></img>
      </div>
      <div className='navigate-btn'>
        <img src={arrow} alt=''></img>
      </div>
    </aside>
  )
}

export default SideBar;