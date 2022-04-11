import React from 'react'
import Calender from './Calender';
import NoticeBoard from './NoticeBoard';
import Events from './Events';
import Navbar from './Navbar';
import './Main.css';


function Main() {
  return (
    <div className='main'>
      <Navbar />
      <h2>Dashboard</h2>
      {/*Notice board*/} {/*Calendar*/}
      {/*Events*/}
      <main className='main-grid'> 
        <NoticeBoard />
        <Calender />
        <Events />
      </main>
    </div>
  )
}

export default Main;