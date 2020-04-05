import styled from 'styled-components';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import FilterList from "@material-ui/icons/FilterList";

export const ExpansionPanelCustom = styled(ExpansionPanel)`
&&{
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
`

export const FilterTextContainer = styled.div`
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;

export const FilterListIcon = styled(FilterList)`
&&{
    margin-right: 20px;
}
`
export const FilterText = styled.h5`
  font-size: 1.1rem;
  font-weight: 500;
  font-size: 14px;
`