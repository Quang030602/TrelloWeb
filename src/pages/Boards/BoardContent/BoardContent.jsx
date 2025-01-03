import { Box } from '@mui/material';
import { useState } from 'react';
import ListColumns from './ListColumns/ListColumns';
import {mapOrder} from '~/utils/sort';

const COLUMN_HEADER_HEIGHT = '50px';
const COLUMN_FOOTER_HEIGHT = '56px';
function BoardContent({board}) { 
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id'); 
  return (
    <Box  sx={{
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e':'#1976d2',
            width: '100%',            
            height: (theme) => theme.trelloCustom.boardContentHeight,
            p:'10px 0',
        }}>
          
      <ListColumns columns = {orderedColumns} />
         
    </Box>  
    
  );
}

export default BoardContent;