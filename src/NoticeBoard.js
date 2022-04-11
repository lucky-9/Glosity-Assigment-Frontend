import React from 'react'
import Link from '@mui/material/Link';
import Notice from './Notice';
import './NoticeBoard.css';

const Notices = [
  { 
    dept: 'Principal Office',
    backgroundColor: 'accent'
  }, 
  { 
    dept: 'Exam Dept.',
    backgroundColor: 'secondary'
  },
  { 
    dept: 'Exam Dept.',
    backgroundColor: 'secondary'
  },
  { 
    dept: 'Student Activity',
    backgroundColor: 'primary'
  }
];

const link = {
  fontSize: '1.18rem'
}

function NoticeBoard() {
  return (
    <div className='notice-board'>
      <h3>Notices</h3>
      <div className="notices">
        {
          Notices.map((notice, index) =>
          <Notice dept={notice.dept} bg={notice.backgroundColor} key={index}
          />)
        }
      </div>
      <hr />
      <div style={{fontSize: '1.18rem', textAlign: 'center', margin: '10px'}}>
        <Link underline='none' href="#" classes={link}>See All Notices</Link>
      </div>
    </div>
  )
}

export default NoticeBoard;