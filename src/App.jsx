import { useState } from 'react'
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import HomeIcon from '@mui/icons-material/Home';
import { pink } from '@mui/material/colors';
import Typography from '@mui/material/Typography';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <div>Quang</div>
      <Typography variant='body2' color='Text.secondary'>Test Typo</Typography>
      <br/>
      <Button variant='text'>text</Button>
      <Button variant='outlined' color='success'>outlined</Button>
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
