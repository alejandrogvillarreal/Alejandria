import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import SignedInRoutes from "../../routes/signedIn";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Breadcrum from "../../components/Common/Breadcrum";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    breadcrums: {
      marginBottom: 20
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
);

export default function SignedIn() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.screen.availWidth >= 430) {
      setOpen(true);
    }
  }, []);

  const handleOpenSidebar = () => {
    setOpen(true);
  };

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Header
        open={open}
        drawerWidth={drawerWidth}
        handleOpenSidebar={handleOpenSidebar}
      />

      <Sidebar
        open={open}
        drawerWidth={drawerWidth}
        handleCloseSidebar={handleCloseSidebar}
      />

      {/* Content */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.breadcrums}>
          <Breadcrum />
        </div>
        <SignedInRoutes />
      </main>
    </div>
  );
}
