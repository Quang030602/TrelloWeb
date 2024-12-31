import { Box,Button } from '@mui/material';
import ModeSelect from '~/components/ModeSelect';

function AppBar() {
  return (
        <Box
        sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trelloCustom?.appBarHeight || 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: 2, 
        }}
    >
        <Button variant="outlined"
        color="primary"
        sx={{
            color: 'primary.dark',
            mr: 2,
            borderRadius: '16px', 
            px: 3, 
            py: 1, 
        }}>
        Sign In
        </Button>
        <ModeSelect />
        
    </Box>
  );
}
export default AppBar;