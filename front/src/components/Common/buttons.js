import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { BLUE, TITLE_GRAY, DARK_GRAY } from '../../styles';

export const PreStyledButton = styled(({ hide, ...other }) => (
    <Button hide={hide} {...other} />
))`
  && {
    background-color: white;
    cursor: pointer;
    padding: 5px 10px;
    margin-top: auto;
    margin-right: 15px;
    height: 35px;
    font-size: 12px;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
    text-transform: uppercase;
    min-width: ${props => props.width ? props.width : `85px`};
    box-shadow: none;
  }
  &&:hover {
    color: white;
  }
`;

export const PrimaryButton = styled(({ hide, ...other }) => (
    <PreStyledButton hide={hide} {...other} />
))`
  && {
    border: ${props => props.disabled ? `1px solid ${TITLE_GRAY}` : `1px solid ${BLUE}`};
    color: ${props => props.disabled ? TITLE_GRAY : BLUE};
  }
  &&:hover {
    background-color: ${props => props.disabled ? '' : BLUE};
  }
`;

export const CancelButton = styled(({ hide, ...other }) => (
    <PreStyledButton hide={hide} {...other} />
))`
  && {
    color: ${TITLE_GRAY};
    border: 1px solid transparent;
    text-transform: capitalize;
  }
  &&:hover {
    background-color: ${DARK_GRAY};
  }
`;
