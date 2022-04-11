import React from 'react';
import Chip from '@mui/material/Chip';
import { useTheme } from "@mui/material/styles";
import './Notice.css';


function Notice({bg, dept}) {
  const theme = useTheme();
  return (
    <div className='notice-content'>
        <div className='notice-header'>Lorem ipsum dolor sit amet conseturana</div>
        <div style={{ color: theme.palette.primary.main }} className='date-dept'>
          <span className='notice-date'>13 February 2021</span>
          <Chip label={dept} color={bg} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada magna a ex dictum faucibus. Pellentesque metus neque, ultricie bulum
        </p>
    </div>
  )
}

export default Notice;