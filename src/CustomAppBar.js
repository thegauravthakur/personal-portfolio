import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
  title: {
    flexGrow: 1
  }
}));

export default function CustomAppBar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div className={classes.root}>
      <AppBar color={'primary'} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Gaurav Thakur
          </Typography>
          {!matches ?
            <IconButton onClick={() => setOpen(!open)} edge="start" className={classes.menuButton} color="inherit"
                        aria-label="menu">
              <MenuIcon/>
            </IconButton> : <div>
              <Button color="inherit">About</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Contact Me</Button>
            </div>}
        </Toolbar>

          <MenuList hidden={!open} id="menu-list-grow">
            <MenuItem>About</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Contact Me</MenuItem>
          </MenuList>

      </AppBar>
    </div>
  );
}
