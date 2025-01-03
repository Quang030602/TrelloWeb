import { Box } from '@mui/material';
import Card from './Card/Card';
import theme from '~/theme';
const COLUMN_HEADER_HEIGHT = '50px';
const COLUMN_FOOTER_HEIGHT = '56px';
function ListCards (){
    return (
        <Box sx={{
            p:'0 5px',
            m:'0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap:1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight:()=>`calc(
              ${theme.trelloCustom.boardContentHeight} - 
              ${theme.spacing(5)} -
              ${theme.trelloCustom.columnHeaderHeight} - 
              ${theme.trelloCustom.columnFooterHeight}
              )`,
              '&::-webkit-scrollbar-thumb':{ backgroundColor: '#ced0da' },
              '&::-webkit-scrollbar-thumb::hover':{backgroundColor: 'white'},
            }}>
            <Card/>    
            <Card temporatyHideMedia/>    
            <Card temporatyHideMedia/>  
            <Card temporatyHideMedia/>  
            <Card temporatyHideMedia/>  
            <Card temporatyHideMedia/>  
              
        </Box>        
    );
}
export default ListCards;