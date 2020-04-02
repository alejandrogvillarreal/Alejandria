import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

export default function Title(props: Props) {
  return (
    <Typography
      component={props.component || "h1"}
      variant={props.variant || "h1"}
    >
      {props.text}
    </Typography>
  );
}
