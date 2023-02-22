import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #80D856;
    color: white;
    margin-bottom: 30px;
    @media (max-width: 1200px) {
    width: 216px;
    }

    @media (max-width: 1000px) {
    width: 280px;
    }

    @media (max-width: 700px) {
    width: 301px;
    }
`

export const Describe = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #80D856;
    padding: .5em;
`

export const Title = styled.span`
    font-size: 1.45em;
    margin-bottom: 5px;
    line-height: 125%;
    text-transform: capitalize;
    font-weight: 600;
    color: white;
`

export const Text = styled.p`
    font-weight: 600;
    padding-top: 2px;
    color: white;
    font-size: 80%;
    line-height: 125%;
    margin: .5em 0;
`
export const Links = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 0.5em 0;
`

export const Button = styled(Link)`
  border: 2px solid black;
  text-decoration: none;
  padding: 7px 16px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-color: white;
  color: white;
  border-radius: 5px;
  &:hover {
    background: #3FA110;
  }
`;