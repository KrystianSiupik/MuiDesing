
import img1 from './../images/Img1.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Check, CheckBox, Label, MoreVert} from '@mui/icons-material'
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'


function Posts({title,img,postText}) {
  return (
    <Card sx={{ maxWidth: 800}} >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert/>
        </IconButton>
      }
      title={title}
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="60%"
      image={img}
      alt="road"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {postText}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>

      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon  sx={{color:"red"}}/>}  />
      </IconButton>

      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
   
    </CardActions>

  </Card>
  )
}

export default Posts