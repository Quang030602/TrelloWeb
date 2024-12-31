import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme,
} from '@mui/material';
import React from 'react';

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
      <FormControl   sx = {{minWidth:'120px'}} size="small">
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

export default ModeSelect;