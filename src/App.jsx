import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import { pink } from '@mui/material/colors';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <div>Quang</div>

      <br/>
      <Button variant='text'>text</Button>
      <Button variant='outlined'>outlined</Button>
      <Button variant='contained'>contained</Button>
      <br/>

      <AccessAlarmIcon />
      <ThreeDRotation />
      <br/>

      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />

    </>
  )
}

export default App
