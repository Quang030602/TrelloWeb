import {Box}  from '@mui/material';
function BoardContent() {
  return (
    <Box
        sx={{
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e':'#1976d2',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: (theme) =>
            `calc(100vh - ${ theme.trelloCustom?.appBarHeight} - ${theme.trelloCustom?.boardBarHeight})`,
        }}>
        Board content
    </Box>
  );
}

export default BoardContent;