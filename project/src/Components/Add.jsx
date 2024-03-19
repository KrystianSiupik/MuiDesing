import { Fab, IconButton, Modal, Tooltip, Box, styled, Typography, Avatar, TextField, Stack, Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})


const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

function Add() {
    const[isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Tooltip title="Delete" sx={{position:"fixed",
     bottom:20, left:{xs:"calc(50% - 25)",md:30}}}
     onClick={e=>setIsOpen(true)}
     >
    <IconButton>
       <Fab color='primary'>
            <AddIcon/>
       </Fab>
    </IconButton>
    </Tooltip>

    <StyledModal open={isOpen} onClose={()=> setIsOpen(false)}>
        <Box width={400} height={300} bgcolor="background.default" p={3} borderRadius={5} color={"text.primary"}>
          <Typography variant='h6' color="gray" textAlign="center">
                Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{width: 30, height: 30}}/>
            <Typography fontWeight={500} variant="span">  Jan Kowalski</Typography>
        </UserBox>
        <TextField
        multiline
        rows={3}
        placeholder='Type here what you want to say..'
        variant='standard'
        sx={{width:"100%", mt:10}}
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon/>
        <ImageIcon/>
        <VideoCameraBackIcon/>
        <PersonAddIcon/>
        </Stack>

        <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
        fullWidth
        >
        <Button>post</Button>
        <Button sx={{width:"100px"}}><CalendarTodayIcon/></Button>
        </ButtonGroup>
        </Box>
   
    </StyledModal>
    </>
  )
}

export default Add