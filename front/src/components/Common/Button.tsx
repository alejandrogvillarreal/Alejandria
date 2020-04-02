import React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  color?: "default" | "inherit" | "primary" | "secondary";
  disabled?: boolean;
  fullWidth?: boolean;
  text: string;
  onClick: () => void;
}

export default function CommonButton(props: Props) {
  return (
    <Button
      fullWidth={props.fullWidth || false}
      variant="contained"
      color={props.color || "primary"}
      disabled={props.disabled || false}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
