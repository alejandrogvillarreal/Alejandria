import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import { LIGHT_GRAY, BLUE, BLACK } from '../../../styles';

export const MoreMenuItem = styled(MenuItem)`
  background-color: white;
  border-left: 4px solid white;
  min-width: 160px;
  &&:hover {
    background-color: ${LIGHT_GRAY};
    color: ${BLUE};
    border-left: 4px solid ${BLUE};
  }
`

export const ListItemIcon = styled.span`
  margin-top: 5px;
  margin-right: 15px;
`

export const ListItemText = styled.span`
  color: ${BLACK};
`