import { teal, cyan, deepOrange, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
        background: {
          default: '#2c3e50'
        },
        text: {
          primary: '#ecf0f1'
        }
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
        background: {
          default: '#2c3e50'
        },
        text: {
          primary: '#ecf0f1'
        }
      }
    }
  }
})

export default theme
