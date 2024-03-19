import { Box } from "@mui/material"
import Posts from "./Posts"
import data from './../Data/data.json'
import img from './../images/Img1.jpg'
const Feed = () => {


  return (
    <Box flex={5} p={2} sx={{display:"flex",flexDirection:"column",gap:"30px", alignItems:"center", justifyContent:"center"}}>
        
        {data.map((el)=><Posts title={el.title} img={img} postText={el.postText}/>)}
    </Box>
  )
}

export default Feed