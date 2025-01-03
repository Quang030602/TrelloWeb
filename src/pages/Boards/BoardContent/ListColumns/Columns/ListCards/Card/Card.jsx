import AttachmentIcon from '@mui/icons-material/Attachment';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import Button from '@mui/material/Button';
import {Card as MuiCard} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
function Card({temporatyHideMedia}) {
    if (temporatyHideMedia) {
        return(
            <MuiCard sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow:'unset'
              }}>
                
                <CardContent sx = {{ p:1.5,'&:last-child':{p:1.5} }}>
                  <Typography > Card test 01 </Typography>                
                </CardContent>                
              </MuiCard>    
        );
    }
    return (
        <MuiCard sx={{ 
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
          </MuiCard>
     );
}
export default Card;