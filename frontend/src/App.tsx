import React from "react";
import SideBar from "./common/SideBar";
import "./App.css";
import BrandList from './components/brand/BrandList';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Toolbar from "@mui/material/Toolbar";
import IconCommon from './common/IconCommon';


const drawerWidth = 240;

function App() {
  const [account, setAccount] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAccount(event.target.value as string);
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="App">
       <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar style={{ background: '#FFFFFF' }} position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              bgcolor: "#FFFFFF"
            }}
          >
            <Toolbar sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Box>
                  {IconCommon("info")}
                  {IconCommon("notification")}
                  {IconCommon("account")}
                  <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Admin</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={account}
                      label="Admin"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
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
