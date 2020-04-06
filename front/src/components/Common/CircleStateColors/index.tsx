import React from "react";
import { Circle, CircleContainer } from "./CircleStateColors.styles";

interface Props {
  id: "1" | "2" | "3" | "4";
  size: number;
}

export default (props: Props) => {
  return (
    <CircleContainer>
      <Circle statusId={props.id} size={props.size} />
    </CircleContainer>
  );
};
