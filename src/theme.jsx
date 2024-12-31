import { Height } from '@mui/icons-material';
import { colors } from '@mui/material';
import { orange, red, teal,cyan,deepOrange,blue} from '@mui/material/colors'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
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
  components: {
    // Name of the component
    MuiCssBaselines :{
      styleOverrides: {
        body: {
          '::-webkit-scrollbar':{
            width:'8px',
            height:'8px'
          },
          '::-webkit-scrollbar-thumb':{
            backgroundColor: '#bdc3c7',
            borderRadius: '8px',
          },
          '::-webkit-scrollbar-thumb::hover':{
            backgroundColor: '#00b894',
            borderRadius: '8px',
          },
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root:({theme}) => ({
          // Some CSS
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({theme}) =>( {          
            color: theme.palette.primary.main,
            fontSize: '0.875rem',   
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.light,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
            '& fieldset': {
              borderWidth: '1px !important',
            },
        }),
      },
    },
  },
});

export default theme;