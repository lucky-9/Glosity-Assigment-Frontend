import React from 'react';
import { CalendarPicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import './Calendar.css';

function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='calendar'>
        <h3>Calendar</h3>
        <CalendarPicker
        sx={{ backgroundColor: "#fff" }}
        onChange={(date) => console.log(date)}
        />
      </div>
    </LocalizationProvider>
  )
}

export default Calender;