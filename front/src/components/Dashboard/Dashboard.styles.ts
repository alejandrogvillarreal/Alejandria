import styled from "styled-components";
import { Chip } from "@material-ui/core";
import { TITLE_GRAY } from "../../styles";

export const SubTitle = styled.h3<any>`
  font-size: 22px;
  color: black;
  margin: ${(props) => (props.margin ? props.margin : "15px 25px")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  text-transform: ${(props) => (props.toUppercase ? "uppercase" : null)};
`;

export const Square = styled.div<any>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : "1")};
  height: 400px;
  flex-direction: column;
  box-shadow: 0px 1px 5px 0px ${TITLE_GRAY};
  border-radius: 4px;
  padding: 15px;
  margin: 10px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position-x: ${(props) =>
    props.position ? props.position : "right"};
  background-position-y: bottom;
  overflow: hidden;
`;

export const BoxContainer = styled.div<any>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : "1")};
  flex-direction: ${(props) => props.direction};
  height: 100%;
  justify-content: ${(props) => props.justify};
`;

export const BorrowedBooksContainer = styled.div`
  height: 100%;
`;

export const ChipWhiteText = styled(Chip)`
  && {
    color: white;
  }
`;

export const SearchContainer = styled.div<any>`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchBox = styled.div<any>`
  width: 70%;
`;
