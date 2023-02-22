import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
`;

export const Button = styled(Link)`
  border: 2px solid black;
  text-decoration: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  border-color: #e7e7e7;
  color: black;
  border-radius: 5px;
  &:hover {
    background: #e7e7e7;
  }
`;