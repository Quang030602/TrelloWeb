import Box  from '@mui/material/Box';
import theme  from '../../../theme';
function BoardContent() {
  return (
    <Box
        sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: (theme) =>
            `calc(100vh - ${
                theme.trelloCustom?.appBarHeight || 64
            } - ${theme.trelloCustom?.boardBarHeight || 48})`,
        }}>
        Board content
    </Box>
  );
}

export default BoardContent;