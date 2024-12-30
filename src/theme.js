import { orange, red, teal,cyan,deepOrange,blue} from '@mui/material/colors'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'

// A custom theme for this app
const theme = extendTheme({
  trelloCustom:{
    appBarHeight: '48px',
    boardBarHeight:'58px',
  },
  colorSchemes: {
    light: {
      palette:{
        primary: blue,
        secondary: red,
        
      },
    },
    dark: {
      palette: {       
        primary: cyan,
        secondary: orange,       
      },
    },
  },
});

export default theme;