import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Drawer, Link } from "@mui/material";
import "../Styles/HeaderStyles.css";
import logoImg from "../../src/assets/sid.png";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logoImg} alt="Logo" height="30" width="30" id="im" />

      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          fontSize: "24px",
          fontFamily: "popins,sans-serif",
          fontWeight: 700,
          marginTop: "12px"
        }}
      >
        YORFY
      </Typography>

      <ul className="navigation-class">
        <li>
          <Link to={"/"} sx={{ ":active": "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/"}>NFT</Link>
        </li>
        <li>
          <Link to={"/"}>Roadmap</Link>
        </li>
        <li>
          <Link to={"/"}>About Us</Link>
        </li>
        <li>
          <Link to={"/"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/"}>Pages</Link>
        </li>
      </ul>
      <Button variant="contained" sx={{ borderRadius: "8px" }}>
        Join Us
      </Button>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar component={"nav"} sx={{ backgroundColor: "transparent" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="white"
              aria-label="open drawer"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <LegendToggleIcon />
            </IconButton>
            <img
              src={logoImg}
              alt="Logo"
              height="30"
              width="30"
              sx={{
                mr: 1
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: "24px",
                fontFamily: "popins,sans-serif",
                fontWeight: 700
              }}
            >
              YORFY
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"} sx={{ ":active": "white" }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>NFT</Link>
                </li>
                <li>
                  <Link to={"/"}>Roadmap</Link>
                </li>
                <li>
                  <Link to={"/"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/"}>Pages</Link>
                </li>
              </ul>
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1E50FF", borderRadius: "8px" }}
            >
              Join Us
            </Button>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ marginBottom: "80px" }}></Box>
      </Box>
    </>
  );
};

export default Header;





