import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import logoImg from "../../src/assets/sid.png";
import Divider from "@mui/material/Divider";
import { Facebook  } from "@mui/icons-material";




const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#051139",
          paddingLeft: '20px',
          paddingRight : '20px',
         marginTop : '5rem' ,
           "@media (max-width : 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <img src={logoImg} alt="Logo" height="30" width="30" id="im"></img>

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: "24px",
            fontFamily: "popins,sans-serif",
            fontWeight: 700,
            marginTop: "12px",
          }}
        >
          YORFY
        </Typography>
        <Box
          sx={{
            marginTop: { md: 3, sm:2},
            "& svg": {
              fontSize: "25px",
              curose: "pointer",
              mr: 2,
              border: '1px solid white',
              height:'50px',
              width : '50px',
              borderRadius: '50%',
              "@media (max-width : 400px)": {
                fontSize: "10px",
              },
             


              "& svg:hover": {
                color: "red",
                transform: "translateX(5px)",
                transition: "all 400ms",
              },
            },
          }}
        >
          <Facebook/>
          <InstagramIcon />
          <YouTubeIcon />
          <TwitterIcon />
        </Box>
      </Box>
     
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ bgcolor: "blue", width: 1, marginTop:'3px'}}
      />
     
    
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#051139",
          p: 3,
          "@media (max-width : 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-sarif",
            fontSize: "16px",
            fontWeight: 400,
            marginTop : {xs: 2, md: 'inherit'}
          }}
        >
          © 2022 Yorfy Template • All Rights Reserved
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-sarif",
            fontSize: "16px",
            fontWeight: 400,
            marginTop : {xs: 2, md: 'inherit'}
          }}
        >
          Made With Love by Groweb Studio
        </Typography>
      </Box>
     
    </>
  );
};

export default Footer;
