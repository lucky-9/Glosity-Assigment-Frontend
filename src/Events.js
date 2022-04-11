import React, {useEffect, useState} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Event from './Event';
import './Events.css';

function Events() {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/events");
            const events = await response.json();
            console.log("events....", events);
            setEvents(events);
        } catch (error) {
            console.log(error);
        }
    };
    fetchEvents();
  }, []);

  return (
    <div className='events'>
    <h3>Important Events</h3>
     <div className='events-container'>
      {events && 
        <div className='image-carousel'>
          <div className='arrow arrow-left'><ArrowBackIosIcon /></div>
            {events.map(event => <Event event={event} key={event._id}  />)}
          <div className='arrow arrow-right'><ChevronRightIcon/> </div>
        </div>
      }
     </div>
    </div>
  )
}

export default Events;