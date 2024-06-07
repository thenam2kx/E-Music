import { teal, cyan, deepOrange, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
        // primary: {
        //   main: '#ff5252',
        //   primary: '#ff5252',
        //   secondary: '#ff5252'
        // }

      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
        // main: '#ff5252'
        // primary: '#ff5252',
        // secondary: '#ff5252'
      }
    }
  }
})

export default theme
