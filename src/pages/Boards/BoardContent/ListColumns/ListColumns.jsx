import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Column from './Columns/Column';

function ListColumns({columns}) {
    
  return (
    <Box sx = {{
        bgcolor:'inherit',
        width:'100%',
        height:'100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'flex',
        '&::-webkit-scrollbar-track':{ m:0 },
      }}>        
        {/*box column 1 */}
        {columns?.map((column) => (<Column key={column.id} column={column} />))}
        
       
        {/*box add new column  */}
        <Box sx={{
          minWidth : '200px',
          maxWidth : '200px',
          mx:2,
          borderRadius: '5px',
          height: 'fit-content',
          bgcolor:'#ffffff3d'
        }}>
          <Button startIcon={<NoteAddIcon/>} sx={{
            color:'white', 
            border:'none', 
            '&:hover':{border:'none'},
            width:'100%',
            justifyContent:'flex-start',
            pl:2.5,
            py:1,
        }}>
            Add new column
          </Button>
        </Box>
    </Box>
  );
}
export default ListColumns;