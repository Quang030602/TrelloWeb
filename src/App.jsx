import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import * as React from 'react'
import { useState } from 'react'

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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container disableGutters maxWidth={false} sx={{height: '100vh',backgroundColor: 'primary.main', }}>                 
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme)=> theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',

      }}>
        <ModeSelect />       
      </Box>

      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme)=> theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
      }}>
        Board bar
      </Box>
      
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height:(theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
      }} >
        Board content 
      </Box>

    </Container>
  )
}

export default App
