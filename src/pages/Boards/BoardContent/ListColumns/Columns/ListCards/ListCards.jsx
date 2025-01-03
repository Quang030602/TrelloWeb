import { Box } from '@mui/material';
import Card from './Card/Card';
import theme from '~/theme';

function ListCards ({cards}){
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
            {cards?.map(card => <Card key={card._id} card={card} />)}
                         
              
        </Box>        
    );
}
export default ListCards;