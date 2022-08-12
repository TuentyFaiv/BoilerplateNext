import styled from "styled-components";
import { text } from "../Mixins";

export const Container = styled.header`
  width: 100%;
`;

export const TitleLink = styled.a`
  color: #0070F3;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  ${text({ size: "6.4rem", lineHeight: "7.4rem", weight: "700", align: "center" })}
  margin: 0;
`;

export const Description = styled.p`
  ${text({ size: "2.4rem", lineHeight: "3.6rem", align: "center" })}
`;

export const Code = styled.code`
  ${text({ size: "1.8rem", lineHeight: "2.6rem" })}
  background: #fafafa;
  border-radius: 5px;
  padding: 1.2rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
