import React from "react";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// components
import {
  ExpansionPanelCustom,
  FilterTextContainer,
  FilterListIcon,
  FilterText
} from "./ExpansionFilters.styles";

export default (props: any) => (
  <div>
    <ExpansionPanelCustom>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <FilterTextContainer>
          <FilterListIcon />
          <FilterText>Filtrar</FilterText>
        </FilterTextContainer>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{props.children}</ExpansionPanelDetails>
    </ExpansionPanelCustom>
  </div>
);
