import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.header `
    display: flex;
    flex-direction: row;
    background-color: #80D856;
    padding: 10px;
    align-items: baseline;
    justify-content: space-around;
`;

export const Exit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    cursor: pointer;
    &:hover {
    background: #3FA110;
  }
`;

export const Title = styled.h1`
    color: white;
`;
export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
export const Text = styled.span`
    margin-right: 15px;
    color: white;
`;
export const Create = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  color: white;
  margin-right: 20px;
`;