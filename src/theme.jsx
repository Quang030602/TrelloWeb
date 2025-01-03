
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'
// A custom theme for this app
const theme = extendTheme({
  trelloCustom:{
    appBarHeight: '58px',
    boardBarHeight:'60px',
  },
  colorSchemes: {
    // light: {
    //   palette:{
    //     primary: teal,
    //     secondary: deepOrange,        
    //   },
    // },
    // dark: {
    //   palette: {       
    //     primary: cyan,
    //     secondary: orange,       
    //   },
    // },
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
            backgroundColor: '#dcdde1',
            borderRadius: '8px',
          },
          '::-webkit-scrollbar-thumb::hover':{
            backgroundColor: 'white',
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
          borderWidth:'0.5px',
          '&:hover': { borderWidth:'1px'},
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root:{ fontSize: '0.875rem'}
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {      
          fontSize: '0.875rem',            
          '& fieldset': {
            borderWidth: '0.5px !important',
          },
          '&:hover fieldset': {
            borderWidth: '1px !important',
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px !important',
          },
      }
      },
    },
  },
});

export default theme;