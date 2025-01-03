import AddCardIcon from '@mui/icons-material/AddCard';
import Cloud from '@mui/icons-material/Cloud';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import theme from '~/theme';
import ListCards from './ListCards/ListCards';
import  {mapOrder} from '~/utils/sort';

function Column ({column}){
    const orderedCards = mapOrder(column.cards, column.cardOrderIds, '_id');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
    return (
        <Box
          sx = {{
            minWidth:'300px',
            maxWidth:'300px',
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#333643':'#ebecf0',
            ml:2,
            borderRadius: '6px',
            height:'fit-content',
            maxHeight:()=>`calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(5)})`,

          }}
        >
          {/*box header */}
          <Box sx={{
              height: (theme)=>theme.trelloCustom.columnHeaderHeight,
              p:2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              }}>
            <Typography variant='h6'sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}>
              {column.title}
              </Typography>
            <Box> 
              <Tooltip title="More options">           
                  <ExpandMoreIcon
                    id="basic_column_dropdown"
                    aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                      color: 'text.primary',
                      cursor: 'pointer'                
                    }}
                  />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic_column_dropdown'
                }}
              >
                <MenuItem>
                  <ListItemIcon> <AddCardIcon fontSize="small" /> </ListItemIcon>
                  <ListItemText>Add New Card</ListItemText>                
                </MenuItem>
                <MenuItem>
                  <ListItemIcon> <ContentCut fontSize="small" /> </ListItemIcon>
                  <ListItemText>Cut</ListItemText>                
                </MenuItem>
                <MenuItem>
                  <ListItemIcon> <ContentCopy fontSize="small" /> </ListItemIcon>
                  <ListItemText>Copy</ListItemText>                
                </MenuItem>
                <MenuItem>
                  <ListItemIcon> <ContentPaste fontSize="small" /> </ListItemIcon>
                  <ListItemText>Paste</ListItemText>                
                </MenuItem>
                
                <Divider />
                <MenuItem>
                  <ListItemIcon> <DeleteForeverIcon fontSize="small" /> </ListItemIcon>
                  <ListItemText> Remove this column  </ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon> <Cloud fontSize="small" /> </ListItemIcon>
                  <ListItemText> Archive this column  </ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/*box list card */}
          <ListCards cards={orderedCards}/>

          {/*box footer */}
          <Box sx={{
              height:(theme)=>theme.trelloCustom.columnFooterHeight,
              p:2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',  
              }}>
            <Button startIcon={<AddCardIcon/>}> Add new card </Button>
            <Tooltip title="Drag to move"> <DragHandleIcon sx={{cursor:'pointer'}}/> </Tooltip>
          </Box>

        </Box> 
    );
}
export default Column;