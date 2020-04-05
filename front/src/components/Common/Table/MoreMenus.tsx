import React, { useState, Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { MoreMenuItem, ListItemIcon, ListItemText } from "./Table.styles";

interface Props {
  row: any;
  options: any;
}

export default (props: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { options, row } = props;
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton
        aria-label="More"
        aria-owns={open ? "long-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Popover
        id="menu-new"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            padding: "10px 0px",
            borderRadius: "10px",
          },
        }}
      >
        {options.map((option: any, index: number) => (
          <MoreMenuItem
            onClick={() => option.onClick && option.onClick(row)}
            disabled={option.disabled ? option.disabled(row) : false}
            key={index}
          >
            <ListItemIcon>
              {typeof option.icon != "function"
                ? option.icon
                : option.icon(row)}
            </ListItemIcon>
            <ListItemText> {option.title} </ListItemText>
          </MoreMenuItem>
        ))}
      </Popover>
    </Fragment>
  );
};
