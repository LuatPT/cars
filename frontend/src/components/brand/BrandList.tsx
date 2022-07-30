import * as React from "react";

import "./BrandList.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@mui/material/Select';
import SearchInput from '../../common/SearchInput';
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
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

export default function BrandList(props:any) {
  const [filter, setFilter] = React.useState('');

  const classes = useStyles();
  const handleChange = (event:any) => {
    setFilter(event.target.value);
  };

  return (
    <Box
    component="main"
    sx={{
      flexGrow: 1,
      p: 3,
      width: { sm: `calc(100% - ${drawerWidth}px)` },
    }}
  >
    <Toolbar/>
    
    <Box sx={{ display: { xs: 'block', md: 'flex' }, alignItems:"center" }}>
      <h2>CAR BRAND LIST</h2>
        <div className="select-box">
        <FormControl className={classes.formControl}>
          <InputLabel classes={{formControl:classes.formControlLabel}} id="demo-simple-select-label">View all</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={filter}
            onChange={handleChange}
            classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
          >
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Last Updated</MenuItem>
            <MenuItem value={30}>Brand Name</MenuItem>
            <MenuItem value={30}>Number Of Models</MenuItem>
          </Select>
        </FormControl>
        </div>
        <SearchInput />
      <Button id="text-tranform-none" variant="contained"><AddIcon />Add Brand</Button>
    </Box>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    </Typography>
    <Typography paragraph>
      Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
    </Typography>
  </Box>
  )
}
