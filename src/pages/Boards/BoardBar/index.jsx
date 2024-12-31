import { Box, Tooltip } from '@mui/material';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MenuStyle = {
  color: 'primary.main',
  bg: 'white',
  border: 'none',
  px:'5px' ,
  borderRadius: '4px',
  '&. MuiSVGIcon-root': {
    color: 'primary.main',
  },
  '&:hover': {
    bgcolor: 'primary.50',
},
}

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        width: '100%',
        height: (theme) => theme.trelloCustom?.boardBarHeight || 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        gap: 2,
        px: 2,
        overflowX: 'auto',
        borderTop: '3px solid #00bfa5',
      }}>
      <Box sx={{display:'flex', alignItems:'center', gap: 1}}>
        <Chip 
          sx={MenuStyle}
          icon={<DashboardIcon />} 
          label="AiMier learn MERN Stack"
          onClick = {() =>{} } 
        />
         <Chip 
          sx={MenuStyle}
          icon={<VpnLockIcon />} 
          label="Public/Private Workspaces"
          onClick = {() =>{} } 
        />
        <Chip 
          sx={MenuStyle}
          icon={<AddToDriveIcon />} 
          label="Add to Google drive"
          onClick = {() =>{} } 
        />
        <Chip 
          sx={MenuStyle}
          icon={<BoltIcon />} 
          label="Automation"
          onClick = {() =>{} } 
        />
        <Chip 
          sx={MenuStyle}
          icon={<FilterListIcon />} 
          label="Filters"
          onClick = {() =>{} } 
        />
        </Box> 
      
      <Box sx={{display:'flex', alignItems:'center', gap: 1}}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>} >Invite</Button>
        <AvatarGroup max={3}
          sx={{
            '& .MuiAvatar-root': {
               width: 34, 
               height: 34,
               fontSize: '16px',
              },
          }}
        >
          <Tooltip title="AiMier">
            <Avatar 
              alt="AiMier" 
              src="https://th.bing.com/th/id/OIP.yAtxmvqwYVv36qSeq_HQRAHaEK?rs=1&pid=ImgDetMain" />
          </Tooltip>
          <Tooltip title="AiMier">
            <Avatar 
              alt="AiMier" 
              src="https://th.bing.com/th/id/OIP.yAtxmvqwYVv36qSeq_HQRAHaEK?rs=1&pid=ImgDetMain" />
          </Tooltip>
          <Tooltip title="AiMier">
            <Avatar 
              alt="AiMier" 
              src="https://th.bing.com/th/id/OIP.yAtxmvqwYVv36qSeq_HQRAHaEK?rs=1&pid=ImgDetMain" />
          </Tooltip>
          <Tooltip title="AiMier">
            <Avatar 
              alt="AiMier" 
              src="https://th.bing.com/th/id/OIP.yAtxmvqwYVv36qSeq_HQRAHaEK?rs=1&pid=ImgDetMain" />
          </Tooltip>
          <Tooltip title="AiMier">
            <Avatar 
              alt="AiMier" 
              src="https://th.bing.com/th/id/OIP.yAtxmvqwYVv36qSeq_HQRAHaEK?rs=1&pid=ImgDetMain" />
          </Tooltip>
        </AvatarGroup>
        </Box>         
    </Box>
  );
}
export default BoardBar;