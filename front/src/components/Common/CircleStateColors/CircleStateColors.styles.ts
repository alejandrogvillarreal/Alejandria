import styled from 'styled-components';
import { STATES_COLORS } from '../../../styles';

const setColor = (statusId: "1" | "2" | "3" | "4") => {
  return STATES_COLORS[statusId] || 'black'
}

const sizeDefault = 10;

export const Circle = styled.div<any>`
  background-color: transparent;
  border: ${props => (props.size ? props.size : sizeDefault)/2 + 'px'} solid ${props =>  setColor(props.statusId)};
  height: ${props => (props.size ? props.size : sizeDefault) + 'px'};
  margin-right: 10px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: ${props => (props.size ? props.size : sizeDefault) + 'px'};
`

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`