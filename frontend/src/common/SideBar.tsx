import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import IconCommon from './IconCommon';


const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  paper: {
    background: "red",
  },
  formControl: {
    margin: theme.spacing(1),
    width:119,
    height: 40,
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  icon:{
    left:0
  },
  iconOpen:{
    transform:'none'
  },
  formControlLabel:{
    left:24
  },
  selectSelect:{
    paddingLeft:'24px'
  }
}));

const menuList = [
  {
    label: "Car Brand",
    img: IconCommon("car"),
  },
  {
    label: "Folder",
    img: IconCommon("folder"),
  },
  {
    label: "Tasks",
    img: IconCommon("folder"),
  },
  {
    label: "Modules",
    img: IconCommon("folder"),
  },
  {
    label: "Notifications",
    img: IconCommon("folder"),
  },
];

export default function SideBar(props: any) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            m: 1,
            bgcolor: "classes.paper",
            borderRadius: 1,
          }}
        >
        {IconCommon("logo")}
        {IconCommon("menu")}
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {menuList.map((ele, index) => (
          <ListItem key={ele.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{ele.img}</ListItemIcon>
              <ListItemText primary={ele.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Setting"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {IconCommon("setting")}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          classes={{ paper: classes.paper }}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "black",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent" open
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
  );
}
