import styled from "styled-components";
import { text } from "../Mixins";
import * as Responsive from "./responsive/_Home";

export const Container = styled.div`
  padding: 8rem 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 4.8rem;
  ${Responsive.Grid}
`;

export const Card = styled.a`
  min-height: 185px;
  margin: 1.6rem;
  padding: 2.4rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

export const CardTitle = styled.h2`
  ${text({ size: "2.4rem", weight: "700" })}
  margin: 0 0 1.6rem 0;
`;

export const CardText = styled.p`
  ${text({ size: "2rem", lineHeight: "3rem" })}
  margin: 0;
`;
