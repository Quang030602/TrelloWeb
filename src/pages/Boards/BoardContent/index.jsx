import AddCardIcon from '@mui/icons-material/AddCard';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Cloud from '@mui/icons-material/Cloud';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import theme from '~/theme';

const COLUMN_HEADER_HEIGHT = '50px';
const COLUMN_FOOTER_HEIGHT = '56px';
function BoardContent() {
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
        sx={{
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e':'#1976d2',
            width: '100%',            
            height: (theme) => theme.trelloCustom.boardContentHeight,
            p:'10px 0'
        }}>
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
              height: COLUMN_HEADER_HEIGHT,
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
              Column title
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
                ${COLUMN_HEADER_HEIGHT} - 
                ${COLUMN_FOOTER_HEIGHT}
                )`,
                '&::-webkit-scrollbar-thumb':{ backgroundColor: '#ced0da' },
                '&::-webkit-scrollbar-thumb::hover':{backgroundColor: 'white'},
              }}>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://th.bing.com/th?id=OIP.Ss6jOVNBI5zMRvYPMpcudwHaKi&w=209&h=298&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                />
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>
              
              

          </Box>
          {/*box footer */}
          <Box sx={{
              height:COLUMN_FOOTER_HEIGHT,
              p:2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',  
              }}>
            <Button startIcon={<AddCardIcon/>}> Add new card </Button>
            <Tooltip title="Drag to move"> <DragHandleIcon sx={{cursor:'pointer'}}/> </Tooltip>
          </Box>

        </Box> 
         {/*box column 2*/}       
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
              height: COLUMN_HEADER_HEIGHT,
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
              Column title
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
                ${COLUMN_HEADER_HEIGHT} - 
                ${COLUMN_FOOTER_HEIGHT}
                )`,
                '&::-webkit-scrollbar-thumb':{ backgroundColor: '#ced0da' },
                '&::-webkit-scrollbar-thumb::hover':{backgroundColor: 'white'},
              }}>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://th.bing.com/th?id=OIP.Ss6jOVNBI5zMRvYPMpcudwHaKi&w=209&h=298&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                />
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>

              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>              
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > AiMier learn MERN stack </Typography>                
                </CardContent>
                <CardActions sx={{p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon/>}>20</Button>
                  <Button size="small" startIcon={<CommentIcon/>}>15</Button>
                  <Button size="small" startIcon={<AttachmentIcon/>}>10</Button>
                </CardActions>
              </Card>   
          </Box>
          {/*box footer */}
          <Box sx={{
              height:COLUMN_FOOTER_HEIGHT,
              p:2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',  
              }}>
            <Button startIcon={<AddCardIcon/>}> Add new card </Button>
            <Tooltip title="Drag to move"> <DragHandleIcon sx={{cursor:'pointer'}}/> </Tooltip>
          </Box>

        </Box>  
      </Box>
         
      


    </Box>
  );
}

export default BoardContent;