import React,{useState} from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer,IconButton ,Tabs, Tab,Button} from "@mui/material"
const DrawerComp = () => {
    const [openDrawer, setopenDrawer] = useState(false);
    const [value, setvalue] = useState(0);
    
    return(
         <>
         <Drawer open={openDrawer} onClose={()=> setopenDrawer(false)} anchor="top">
            
           <Tabs textColor = 'inherit'  indicatorColor='primary' value={value} onChange={(e,value) => setvalue(value)} >
               <Tab label="Home" href='/'/>
               <Tab label="About us" href='/aboutus'/>
               <Tab label="Services"  href='/services'/>
               <Tab label="Contact us" href="/contactus" />
            </Tabs>
              <Button variant='contained' sx={{width:"100px", m:"auto"}}>Login</Button> <br />
              <Button variant="contained" sx={{width:"100px", m:"auto", marginBottom:"1rem"}} >Signup</Button> 
         </Drawer>

         <IconButton sx={{marginLeft:"auto", color:"whitesmoke"}} onClick={()=>setopenDrawer(!openDrawer)}>
          <MenuIcon />
         </IconButton>
         </>
    );
};
export default DrawerComp;