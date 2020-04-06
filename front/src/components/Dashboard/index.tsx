import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { languageContext } from "../../config/language";
import { List, ListItem, ListItemText } from "@material-ui/core";

import CircleStateColors from "../Common/CircleStateColors";
import SearchInput from "../Common/SearchInput";
import CommonTitle from "../Common/Title";

//styles
import {
  SubTitle,
  Square,
  BoxContainer,
  BorrowedBooksContainer,
  ChipWhiteText,
  SearchContainer,
  SearchBox,
} from "./Dashboard.styles";

//import img
import booksBackground from "../../assets/dashboard/books-background.jpg";

// books-background.jpg

const Dashboard = (props: any) => {
  const [data, setData] = useState<any>({});
  const { languageContext: lang } = useContext(languageContext);

  useEffect(() => {
    let newData = {
      pending: 0,
      borrowed: 0,
      returned: 0,
      cancelled: 0,
    };
    setData(newData);
  }, [props.inquiries]);

  return (
    <div className="container" id="component-dashaboard">
      <CommonTitle component="h1" variant="h4" text={"Bienvenido Usuario"} />
      <BoxContainer direction="row">
        <BoxContainer direction="column" flex={2}>
          <BoxContainer direction="row">
            <Square backgroundImage={booksBackground}>
              <SearchContainer>
                <SearchBox>
                  <SearchInput />
                </SearchBox>
              </SearchContainer>
            </Square>
          </BoxContainer>
        </BoxContainer>
        <BoxContainer direction="column" flex={1}>
          <Square backgroundImage={"inquiriesBackground"}>
            {/* <NavLink to={"/dashboard/history/books"}> */}
              <SubTitle>{"Libros Prestados"}</SubTitle>
            {/* </NavLink> */}
            <BorrowedBooksContainer>
              <List>
                <ListItem>
                  <CircleStateColors id={"1"} size={15} />
                  <ListItemText>{"Pendientes de devolución"}</ListItemText>
                  <ChipWhiteText label={data.pending} color="primary" />
                </ListItem>
                <ListItem>
                  <CircleStateColors id={"2"} size={15} />
                  <ListItemText>{"Pendientes de aprobación"} </ListItemText>
                  <ChipWhiteText label={data.borrowed} color="primary" />
                </ListItem>
                <ListItem>
                  <CircleStateColors id={"3"} size={15} />
                  <ListItemText>{"Devueltos"}</ListItemText>
                  <ChipWhiteText label={data.returned} color="primary" />
                </ListItem>
                <ListItem>
                  <CircleStateColors id={"4"} size={15} />
                  <ListItemText>{"Cancelados"}</ListItemText>
                  <ChipWhiteText label={data.cancelled} color="primary" />
                </ListItem>
              </List>
            </BorrowedBooksContainer>
          </Square>
        </BoxContainer>
      </BoxContainer>
    </div>
  );
};
export default Dashboard;
