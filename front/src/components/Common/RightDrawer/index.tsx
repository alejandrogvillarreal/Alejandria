import React from "react";
import { Drawer } from "@material-ui/core";
import { DrawerContainer, TitleContainer } from "./RightDrawer.styles.js";

interface Props {
  open: boolean;
  title: string;
  children: any;
}

export default (props: Props) => {
  return (
    <Drawer anchor="right" open={props.open}>
      <DrawerContainer>
        <TitleContainer>{props.title}</TitleContainer>
        {props.children}
      </DrawerContainer>
    </Drawer>
  );
};
