import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import MenuList from "./MenuList";

interface Props {
  open: boolean;
  drawerWidth: number;
  handleCloseSidebar: () => void;
}

export default function Sidebar(props: Props) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      drawer: {
        width: props.drawerWidth,
        flexShrink: 0
      },
      drawerPaper: {
        width: props.drawerWidth
      },
      drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
      }
    })
  );

  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleCloseSidebar}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuList />
      </Drawer>
    </div>
  );
}
