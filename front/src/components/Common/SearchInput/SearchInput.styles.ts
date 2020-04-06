import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { LIGHT_GRAY, BLUE, BLACK, TITLE_GRAY } from "../../../styles";

export const CustomButtonGroup = styled(ButtonGroup)`
  color: ${BLACK};
  background-color: white;
  && button {
    border: none;
  }
  && button:hover {
    background-color: white;
  }
`;
export const CustomButton = styled(Button)`
  color: ${BLACK};
  background-color: white;
`;

export const SplitButtonContainer = styled.div<any>`
  display: flex;
  align-items: center;
`;

export const SearchFormContainer = styled.form<any>`
  box-sizing: border-box;
  height: ${(props) => (props.height ? props.height : "auto")};
  width: 100%;
  box-shadow: 0px 1px 5px 0px ${TITLE_GRAY};
  border-radius: 4px;
  display: flex;
  padding: 2px 4px;
  align-items: center;
  background-color: white;
`;
