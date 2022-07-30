import React from "react";
import SideBar from "./common/SideBar";
import "./App.css";
import BrandList from './components/brand/BrandList';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';


const drawerWidth = 240;

function App() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="App">
       <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="info" color="inherit">
                  <Badge color="error">
                    <InfoIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton size="large" edge="end" aria-label="account of current user" aria-controls="primary-search-account-menu"
                  aria-haspopup="true" color="inherit"> 
                  {/* onClick={handleProfileMenuOpen}  */}
                  <AccountCircle />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ display: "flex" }}>
          <SideBar />
          <BrandList />
        </Box>
    </div>
  );
}

export default App;
