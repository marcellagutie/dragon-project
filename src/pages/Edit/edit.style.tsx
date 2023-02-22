import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Input = styled.input `
    outline: 1px solid #80D856;
    border-radius: 10px;
    width: 300px;
    height: 30px;
    padding: 5px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const Button = styled(Link)`
  border: 2px solid black;
  text-decoration: none;
  padding: 7px 16px;
  font-size: 12px;
  font-weight: bold;
  width: 100px;
  cursor: pointer;
  border-color: #80D856;
  color: black;
  border-radius: 5px;
  &:hover {
    background: #3FA110;
  }
`;

