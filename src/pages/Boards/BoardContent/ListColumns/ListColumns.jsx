import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Column from './Columns/Column';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';



function ListColumns({columns}) {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false);
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)
  const [newColumnTitle, setNewColumnTitle] = useState('')
  const addNewColumn = () => {
    if (!newColumnTitle)
      {
        toast.error('Please enter column title',{
          position: "top-center",
        })
        return
      }
    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }

  /**
   * SortableContext yêu cầu items là một mảng dạng ['id-1','id-2'], ko phải [{id:'id-1'},{id:'id-2'}]
   * nếu dùng thì vẫn kéo thả được nhma ko có animation 
   */
  
  return (
    <SortableContext items={columns?.map(c=>c._id)} strategy={horizontalListSortingStrategy}>
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
          
          {!openNewColumnForm 
            ? <Box onClick={toggleOpenNewColumnForm} sx={{
              minWidth: '250px',
              maxWidth: '250px',
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

            :<Box sx={{
                minWidth: '250px',
                maxWidth: '250px',
                mx:2,
                p:1, 
                borderRadius: '6px',
                height: 'fit-content',
                bgcolor: 'ffffff3d',
                display:'flex',
                flexDirection:'column',
                gap:1
            }} > 
              <TextField 
                label="Enter column title..." 
                type="text" 
                size='small' 
                variant='outlined'
                autoFocus
                value={newColumnTitle}
                onChange={(e) => setNewColumnTitle(e.target.value)}
                
                sx = {{
                  
                  '& label':{
                    color:'white',
                  },
                  '& label.Mui-focused':{
                    color:'white',
                  },
                  '& input':{
                    color:'white',
                  },
                  '& .MuiOutlinedInput-root':{
                    '& fieldset':{ borderColor:'white'},
                    '&:hover fieldset':{ borderColor:'white'},
                    '&.Mui-focused fieldset':{ borderColor:'white'}
                  },
                }}
              />
              <Box sx ={{ display:'flex',alignItems:'center',gap:1 }}> 
                <Button 
                  onClick={addNewColumn}
                  variant='contained' color = 'success' size ='small'
                    sx = {{
                      boxShadow:'none',
                      border: '0.5px solid',
                      borderColor: (theme) => theme.palette.success.main,
                      '&:hover':{bgcolor: (theme) => theme.palette.success.main},
                    }}
                > 
                  Add new column
                </Button>
                <CloseIcon 
                  fontSize='small'
                  sx={{
                    color:'white',
                    cursor:'pointer',
                    '&:hover':{bgcolor: (theme) => theme.palette.warning.light}
                  }}
                  onClick={toggleOpenNewColumnForm}
                  />
              </Box>
            </Box>

          }
          {/*box add new column  */}
          
      </Box>
    </SortableContext>
  );
}
export default ListColumns;