import { experimental_extendTheme as extendTheme} from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px';
const BOARD_BAR_HEIGHT = '60px';
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const COLUMN_HEADER_HEIGHT = '50px';
const COLUMN_FOOTER_HEIGHT = '56px';

// A custom theme for this app
const theme = extendTheme({
  trelloCustom:{
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight:BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#009688' }, // teal
        secondary: { main: '#FF5722' }, // deepOrange
        info: { main: '#2196F3' }, // blue
      },
    },
    dark: {
      palette: {
        primary: { main: '#00BCD4' }, // cyan
        secondary: { main: '#FF9800' }, // orange
        info: { main: '#2196F3' }, // blue
      },
    },
  },
  components: {
    // Name of the component
    MuiCssBaselines :{
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar':{
            width:'8px',
            height:'8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor: '#dcdde1',
            borderRadius: '8px',
          },
          '*::-webkit-scrollbar-thumb::hover':{
            backgroundColor: '#bfc2cf',
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
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root:{ 
          '&.MuiTypography-body1': { fontSize: '0.875rem'},
        }
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.MuiSvgIcon-fontSizeMedium': {
            '&[data-testid="DragHandleIcon"]': {
              color: 'black', // Change DragHandleIcon color to black
            },
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: 'white !important', // Ensure background color is white
          color: 'black !important', // Ensure text color is black
          border: 'none !important', // Remove border

          borderRadius: '8px !important', // Make the frame rounded
        },
      },
    },
  },
});

export default theme;