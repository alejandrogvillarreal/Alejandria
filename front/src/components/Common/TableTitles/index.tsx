import React from "react";
import AddIcon from "@material-ui/icons/Add";

// components
import CommonTitle from "../Title";

// styled components
import { Header, HeaderIcon, RoundButton50 } from "./TableTitles.styles.js";

interface Props {
  title: string;
  buttonAction?: {
    buttonId: string;
    onClick: () => void;
    disabled?: boolean;
  };
}

export default (props: Props) => {
  const button = () => {
    const { buttonAction } = props;
    return (
      <HeaderIcon>
        <RoundButton50
          variant="contained"
          id={buttonAction && buttonAction.buttonId}
          onClick={buttonAction && buttonAction.onClick}
          disabled={(buttonAction && buttonAction.disabled) || false}
        >
          <AddIcon />
        </RoundButton50>
      </HeaderIcon>
    );
  };

  const { buttonAction, title } = props;
  return (
    <Header>
      <CommonTitle component="h1" variant="h4" text={title} />
      {buttonAction && button()}
    </Header>
  );
};
