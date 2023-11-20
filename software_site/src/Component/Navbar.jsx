import React,{useState} from 'react';
import DrawerComp from './DrawerComp';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Tabs,Tab, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Diversity2Icon from '@mui/icons-material/Diversity2';


export default function Navbar() {
const [value, setvalue] = useState();
const theme = useTheme();
const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar sx={{ background: "#063970" }}  position='sticky' >
        <Toolbar >
          <IconButton size="large" color="inherit" edge="start" >
            <Diversity2Icon />
          </IconButton>
          <Typography variant="h6" component="div" >ITCompany</Typography>
          {
            isMatch ? (
              <>
              <DrawerComp/>
              </>

            ):(
              <>
               <Tabs textColor = 'inherit' indicatorColor='primary' value={value} onChange={(e,value) => setvalue(value)} >
               <Tab label="Home" href='/'/>
               <Tab label="About us" href='/aboutus'/>
               <Tab label="Services"  href='/services'/>
               <Tab label="Contact us" href="/contactus" />
               </Tabs>
         
              <Button variant='contained' sx={{ml: "auto"}}>Login</Button>
              <Button variant="contained" sx={{ml:"1rem"}}>Signup</Button> 
               </>
            )
          }

          
        </Toolbar>
        
      </AppBar>
  
    </>
  );
}