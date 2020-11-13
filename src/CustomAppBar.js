import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";

import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
}));

export default function CustomAppBar({ profileRef, projectRef, skillRef }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.root}>
      <AppBar color={"primary"} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Gaurav Thakur
          </Typography>
          {!matches ? (
            <IconButton
              onClick={() => setOpen(!open)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu button"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              <Button
                aria-label="this button will take you to about section"
                color="inherit"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => {
                    window.scrollTo({
                      behavior: "smooth",
                      top: profileRef.current.offsetTop,
                    });
                  }, 10);
                }}
              >
                About
              </Button>
              <Button
                aria-label="this button will take you to project section"
                color="inherit"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => {
                    window.scrollTo({
                      behavior: "smooth",
                      top: projectRef.current.offsetTop,
                    });
                  }, 10);
                }}
              >
                Projects
              </Button>
              <Button
                aria-label="this button will take you to skill section"
                color="inherit"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => {
                    window.scrollTo({
                      behavior: "smooth",
                      top: skillRef.current.offsetTop,
                    });
                  }, 10);
                }}
              >
                Skills
              </Button>
            </div>
          )}
        </Toolbar>

        <MenuList hidden={!open} id="menu-list-grow">
          <MenuItem
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                window.scrollTo({
                  behavior: "smooth",
                  top: profileRef.current.offsetTop,
                });
              }, 10);
            }}
          >
            About
          </MenuItem>
          <MenuItem
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                window.scrollTo({
                  behavior: "smooth",
                  top: projectRef.current.offsetTop,
                });
              }, 10);
            }}
          >
            Projects
          </MenuItem>
          <MenuItem
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                window.scrollTo({
                  behavior: "smooth",
                  top: skillRef.current.offsetTop,
                });
              }, 10);
            }}
          >
            Skills
          </MenuItem>
        </MenuList>
      </AppBar>
    </div>
  );
}
