import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { TITLE_GRAY, BLUE } from '../../../styles';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px
`;

export const HeaderIcon = styled.div`
  padding-right: 20px
`;

export const RoundButton50 = styled(Button)`
  && {
    background-color: ${props => props.disabled ? TITLE_GRAY : BLUE };
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 0px;
    min-width: 0px;
  }
`;