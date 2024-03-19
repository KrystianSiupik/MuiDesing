import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography} from '@mui/material'
import React from 'react'
import img from './../images/Img1.jpg'
import LastConversation from './LastConversation'
const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm:"block"}}}>
            <Box position="fixed" width={300}>
                <Typography variant='h6' fontWeight="100">Friends</Typography>
                 <AvatarGroup max={4} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                 </AvatarGroup>
                    
                    <Typography variant='h6' fontWeight="100" gap={5} mt={2} mb={2}>Latest posts</Typography>
                    <ImageList cols={3} rowHeight={100}>
                        <ImageListItem>
                            <img src={img}/>
                        </ImageListItem>
                        <ImageListItem>
                            <img src={img}/>
                        </ImageListItem>
                        <ImageListItem>
                            <img src={img}/>
                        </ImageListItem>
                        <ImageListItem>
                            <img src={img}/>
                        </ImageListItem>
                    </ImageList>
                <Typography variant='h6' fontWeight="100" gap={5} mt={2} mb={2}>Latest Conversations</Typography>
                    <LastConversation/>
            </Box>
    </Box>
  )
}

export default RightBar