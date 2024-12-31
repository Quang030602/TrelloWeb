import { orange, red, teal,cyan,deepOrange,blue} from '@mui/material/colors'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
import createTheme from "@mui/material/styles/createTheme";
// A custom theme for this app
const theme = extendTheme({
  trelloCustom:{
    appBarHeight: '58px',
    boardBarHeight:'60px',
  },
  colorSchemes: {
    light: {
      palette:{
        primary: teal,
        secondary: deepOrange,        
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