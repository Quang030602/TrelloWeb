import { useState } from 'react'
import * as React from 'react'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import{  useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme(); 
  const handleChange = (event) => {
    const selectedMode = event.target.value;    
    setMode(selectedMode);  
 
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small"> 
      <InputLabel id="label-light-dark-mode">Mode</InputLabel>
      <Select
        labelId="label-light-dark-mode"
        id="label-light-dark-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >        
        <MenuItem value="light">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <LightModeIcon fontSize='small'/>Light
          </Box>
        </MenuItem>

        <MenuItem value="dark">        
          <Box  sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <DarkModeOutlinedIcon fontSize='small' />Dark
          </Box >
        </MenuItem>

        <MenuItem value="system">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <SettingsBrightnessIcon fontSize='small'/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <ModeSelect />
      <hr/>

      <ModeToggle />
      <hr/>    
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
