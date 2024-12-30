import { Box } from '@mui/material';
import theme  from '../../../theme';

function BoardBar() {
  return (
    <Box
            sx={{
              backgroundColor: 'primary.dark',
              width: '100%',
              height: (theme) => theme.trelloCustom?.boardBarHeight || 48,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Board bar
          </Box>
  );
}
export default BoardBar;