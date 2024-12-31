import { Box } from '@mui/material';
import ModeSelect from '~/components/ModeSelect';
import AppIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Workspaces from './Menu/Workspaces';
import Recent from './Menu/Recent';
import Starred from './Menu/Starred';
import Templates from './Menu/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menu/Profiles';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
function AppBar() {
  return (
    <Box
      sx={{
      backgroundColor: 'background.paper',
      width: '100%',
      height: (theme) => theme.trelloCustom?.appBarHeight,
      display: 'flex',
      alignItems: 'center',      
      justifyContent: 'space-between', 
      gap: 2,
      px: 2,
      overflowX: 'auto',
      }}>
      <Box sx={{display:'flex', alignItems:'center', gap: 1}}>
        <AppIcon sx={{color:'primary.main'}} />
        <Box sx={{display:'flex', alignItems:'center', gap: 0.5}}>
          <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx ={{color:'primary.main'}}/>
          <Typography variant='span' sx={{fontSize:'1.2rem', fontWeight:'bold', color:'primary.main' }}>
            Trello
          </Typography>
        </Box>
        <Box sx={{display:{xs:'none', md:'flex'}, gap: 1}}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined" startIcon={<LibraryAddIcon/>}>Created</Button>
        </Box>
      </Box>
      <Box sx={{display:'flex', alignItems:'center', gap: 1}}>

        <TextField id="outlined-search" label="Search..." type="search" size='small' sx = {{minWidth:'120px'}}/>

        <ModeSelect /> 

        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx = {{cursor:'pointer',color:'primary.main'}}>
            <NotificationsNoneIcon sx={{ color:'primary.main'}} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx = {{cursor:'pointer',color:'primary.main'}} />
        </Tooltip>

        <Profiles />

      </Box> 
      
        
    </Box>
  );
}
export default AppBar;