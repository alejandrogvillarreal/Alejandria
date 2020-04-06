import React, { useState, useRef } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";

import {
  CustomButton,
  CustomButtonGroup,
  SplitButtonContainer,
} from "./SearchInput.styles";

interface Props {
  options: any;
  selectedOption: any;
  setSelectedOption: (option: any) => void;
  handleSubmit: (event: any) => void;
}

export default function SplitButton(props: Props) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (option: any) => {
    props.setSelectedOption(option);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <SplitButtonContainer>
      <CustomButtonGroup variant="text" ref={anchorRef}>
        <CustomButton onClick={props.handleSubmit} type="submit">
          {props.selectedOption && props.selectedOption.value}
        </CustomButton>
        <CustomButton size="small" onClick={handleToggle}>
          <ArrowDropDownIcon />
        </CustomButton>
      </CustomButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList id="split-button-search">
                  {props.options.map((option: any, index: number) => (
                    <MenuItem
                      key={index}
                      selected={option.id === props.selectedOption.id}
                      onClick={(event) => handleMenuItemClick(option)}
                    >
                      {option.value}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </SplitButtonContainer>
  );
}
