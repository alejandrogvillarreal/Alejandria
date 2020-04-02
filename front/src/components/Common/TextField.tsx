import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  autoFocus?: boolean;
  color?: "primary" | "secondary";
  disabled?: boolean;
  fullWidth?: boolean;
  id: string;
  label: string;
  name: string;
  onChange?: () => void;
  value: string
}

export default function CommonTextField(props: Props) {
  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth={props.fullWidth || false}
        id={props.id}
        label={props.label}
        name={props.name}
        autoFocus={props.autoFocus || false}
        color={props.color || "primary"}
        disabled={props.disabled || false}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
