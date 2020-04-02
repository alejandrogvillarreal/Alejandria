import React, { useContext, useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import classNames from "classnames";

import { languageContext } from "../../config/language";
import menuConfig from "./menuConfig";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    nested: {
      paddingLeft: theme.spacing(12)
    },
    item: {
      textDecoration: "none",
      color: "rgba(0, 0, 0, 0.87);"
    },
    menuItem: {
      color: "black"
    },
    menuIconSelected: {
      color: "blue"
    },
    subMenuItem: {
      color: "blue"
    }
  })
);

const MenuList = (props: any) => {
  const { languageContext: lang } = useContext(languageContext);
  const classes = useStyles();
  const [subMenusOpen, setSubMenusOpen] = useState<any>({});

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: any) =>
    Boolean(props.location.pathname === routeName);

  const handleSubMenusOpen = (key: any) => {
    setSubMenusOpen({
      ...subMenusOpen,
      [key]: !subMenusOpen[key]
    });
  };

  const MenuItem = (props: any) => {
    const disabled = props.disabled;
    const isSubMenu = props.isSubMenu;
    let menuItemClasses = classNames({});

    if (isSubMenu) {
      menuItemClasses = classNames({
        [classes.nested]: "nested"
      });
      if (activeRoute(props.path)) {
        menuItemClasses = classNames({
          [classes.nested]: "nested",
          [classes.subMenuItem]: "submenu"
        });
      }
    }
    if (!isSubMenu && activeRoute(props.path)) {
      menuItemClasses = classNames({
        [classes.menuItem]: "menu"
      });
    }

    return (
      <NavLink
        onClick={e => disabled && e.preventDefault()}
        to={props.path}
        // className={disabled ? " disabled" : "" }
        className={classes.item}
      >
        <ListItem
          button
          // disabled={disabled}
          className={menuItemClasses}
        >
          {props.icon && (
            <ListItemIcon
              className={
                activeRoute(props.path) ? classes.menuIconSelected : ""
              }
            >
              <props.icon />
            </ListItemIcon>
          )}
          <ListItemText primary={props.label} />
        </ListItem>
      </NavLink>
    );
  };

  const MenuCollapse = (props: any) => {
    const open = subMenusOpen[props.label];
    const [active, setActive] = useState(false);
    const disabled = props.disabled;

    useEffect(() => {
      props.subMenus.map((p: any) => activeRoute(p.path) && setActive(true));
    }, []);

    return (
      <span>
        <ListItem
          className={active ? classes.menuItem : ""}
          button
          onClick={() => handleSubMenusOpen(props.label)}
        >
          <ListItemIcon className={active ? classes.menuIconSelected : ""}>
            <props.icon />
          </ListItemIcon>
          <ListItemText primary={props.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {props.subMenus.map((subMenu: any, i: number) => (
            <div key={i}>
              <MenuItem {...subMenu} isSubMenu={true} />
            </div>
          ))}
        </Collapse>
      </span>
    );
  };

  return (
    <List component="nav" className={classes.root}>
      {menuConfig(lang).map((params: any, key: number) => {
        return params.subMenus ? (
          <MenuCollapse key={key} {...params} />
        ) : (
          <MenuItem key={key} {...params} />
        );
      })}
    </List>
  );
};

export default withRouter(MenuList);
