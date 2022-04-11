import React from 'react';
import { useTheme } from "@mui/material/styles";

import './Event.css';

function Event({event}) {
  const theme = useTheme();
  const { image, createdAt, description, name } = event;
  const month = new Date(createdAt).toLocaleString('default', { month: 'long' });
  const date = new Date(createdAt).getDate();

  return (
    <div className='event'>
    <img src={image} className='event-image' alt={description} />
    <div className='event-details'>
        <div style={{ color: theme.palette.primary.main }} className='event-date'>
          <span className='date'>{ date }</span>
          {month}
       </div>
       <div>
          {name}
          <br />
          <span className='event-description'>{description}</span>
       </div>
    </div>
  </div>
  )
}

export default Event;