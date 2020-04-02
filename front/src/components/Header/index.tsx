import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {
  open: boolean;
  drawerWidth: number;
  handleOpenSidebar: () => void;
}

export default function Header(props: Props) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      appBar: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      appBarShift: {
        width: `calc(100% - ${props.drawerWidth}px)`,
        marginLeft: props.drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      hide: {
        display: "none"
      }
    })
  );
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleOpenSidebar}
          edge="start"
          className={clsx(classes.menuButton, props.open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Alejandria
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
