import styled from 'styled-components';

import { BLUE } from '../../../styles';

export const DrawerContainer = styled.div`
  width: 50vw;
  @media (max-width: 1390px) {
    width: 53vw;
  }
`;

export const TitleContainer = styled.div`
  background-color: ${BLUE};
  display: flex;
  align-items: center;
  color: white;
  padding-left: 20px;
  //font-family: 'Lato-Light';
  //font-size: 16px;
  @media (min-width: 600px){
    height: 64px;
  }
  height: 56px;
`;

