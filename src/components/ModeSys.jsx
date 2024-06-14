
import { useColorScheme } from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSys() {
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  const { mode, setMode } = useColorScheme()

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LightModeIcon sx={{ fontSize: '20px' }} /> Light
          </Box>
        </MenuItem>

        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <DarkModeIcon sx={{ fontSize: '20px' }} /> Dark
          </Box>
        </MenuItem>

        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <SettingsBrightnessIcon sx={{ fontSize: '20px' }} /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSys