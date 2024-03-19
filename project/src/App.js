import {Button, Stack, Typography, styled, Box, createTheme, ThemeProvider} from "@mui/material"
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import Navbar from "./Components/Nabar"
import Add from "./Components/Add"
import style from "./App.css"
import { useState } from "react";
function App() {

const[mode, setIsMode] = useState("dark")
const darkTheme = createTheme({
  palette:{
    mode: mode
  }
})

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setIsMode={setIsMode} mode={mode}/>
        <Feed/>
        <RightBar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
