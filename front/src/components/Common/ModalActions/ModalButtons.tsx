import React from "react";
import { PrimaryButton, CancelButton } from "../buttons";

interface Props {
  grayButton?: true;
  cancelButton?: true;
  onClick: () => void;
  buttonId: string;
  disabled: boolean;
  width?: string;
  icon?: any;
  text: string;
}

export default (props: Props) => {
  if (props.grayButton || props.cancelButton) {
    return (
      <CancelButton
        onClick={props.onClick}
        id={props.buttonId}
        disabled={props.disabled}
        width={props.width}
      >
        {props.icon}
        {props.text}
      </CancelButton>
    );
  } else {
    return (
      <PrimaryButton
        onClick={props.onClick}
        id={props.buttonId}
        disabled={props.disabled}
        width={props.width}
      >
        {props.icon}
        {props.text}
      </PrimaryButton>
    );
  }
};
