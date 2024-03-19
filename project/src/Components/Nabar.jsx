import { AppBar, Toolbar ,Typography,styled,Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material'
import React, { useState } from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})


const Search = styled("div")(({theme})=> ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"30%",
    
}))


const Icon = styled(Box)(({theme})=> ({
  display: "none",
  alignContent:"center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))


const UserBox = styled(Box)(({theme})=> ({
    display: "flex",
    alignContent:"center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:
    {
        display:"none"
    }
  }))

const Navbar = () => {
const[isOpen, setIsOpen] = useState(false);
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs:"none", sm:"block"}}}>
                Krystian Siupik
            </Typography>
            <ComputerIcon sx={{display: {xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='search'  sx={{color:"black"}}/></Search>
            <Icon>
                <Badge badgeContent={4} color='error'>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={4} color='error'>
                    <NotificationsIcon/>
                </Badge>
                <Avatar sx={{width:"30px", height:"30px"}}  onClick={e=>setIsOpen(true)}/>
            </Icon>
            <UserBox  onClick={e=>setIsOpen(true)}>
                 <Avatar sx={{width:"30px", height:"30px"}}/>
                 <Typography>Nazwa</Typography>
            </UserBox>
        </StyledToolbar>

        <Menu open={isOpen}
         onClick={e=>setIsOpen(false)}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
       
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My accouny</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar