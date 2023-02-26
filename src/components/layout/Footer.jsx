import React from 'react'
import {Box , Typography} from "@mui/material";
import { fontSize } from '@mui/system';

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
        <Box sx={{textAlign: 'center' , bgcolor: '#1a1a19' , color: 'white' , p:3}}>
            <Box sx={{my:3 , "& svg":{
                fontSize:"60px" , 
                cursor: 'Pointer' , 
                mr: 2
                } ,
                "& svg:hover" : {
                    color : "goldenrod" ,
                    transform : "translateX(6px)",
                    transition:"all 400ms"
                }
                
            
            }}>
                {/* icon */}
                <InstagramIcon />
                <LinkedInIcon />

            </Box>
            <Typography variant="h5" sx={{"@media (max-width:600px)" : { fontSize: "1rem" }}}>
                All right reserved &copy; arpan tripathi
            </Typography>
        </Box>
    </>
  );
}

export default Footer
