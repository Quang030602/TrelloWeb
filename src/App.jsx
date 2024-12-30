// File: src/App.jsx
import React, { useState } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme,
  Button,
} from '@mui/material';

function ModeSelect() {
  const { mode, setMode } = useColorScheme() || {}; // Ensure context is available
  const handleChange = (event) => {
    if (setMode) {
      setMode(event.target.value);
    } else {
      console.error('useColorScheme context is not available');
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-light-dark-mode">Mode</InputLabel>
      <Select
        labelId="label-light-dark-mode"
        id="label-light-dark-mode"
        value={mode || 'light'}
        label="Mode"
        onChange={handleChange}
        aria-label="Select mode"
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
  
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: '100vh', backgroundColor: 'primary.main' }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.light',
            width: '100%',
            height: (theme) => theme.trelloCustom?.appBarHeight || 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: 2, 
          }}
        >
          <Button variant="outlined"
            color="primary"
            sx={{
              color: 'primary.dark',
              mr: 2,
              borderRadius: '16px', 
              px: 3, 
              py: 1, 
            }}>
            Sign In
          </Button>
          <ModeSelect />
          
        </Box>

        <Box
          sx={{
            backgroundColor: 'primary.dark',
            width: '100%',
            height: (theme) => theme.trelloCustom?.boardBarHeight || 48,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Board bar
        </Box>

        <Box
          sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: (theme) =>
              `calc(100vh - ${
                theme.trelloCustom?.appBarHeight || 64
              } - ${theme.trelloCustom?.boardBarHeight || 48})`,
          }}
        >
          Board content
        </Box>
      </Container>
    
  );
}

export default App;
