import styled from "styled-components";
import { flex, text } from "../Mixins";

export const Container = styled.span`
  ${text({ size: "1.8rem", lineHeight: "2.2rem", align: "center" })}
  position: relative;
  width: 100px;
  margin: 0 auto;
  padding: .4rem .8rem;
  border-radius: 4px;
  border: 1px solid black;
  text-transform: uppercase;
  z-index: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const Options = styled.span`
  ${flex({ align: "center", justify: "center" })}
  position: absolute;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 0;
`;

export const Option = styled.button`
  padding: .6rem 0;
  width: 100%;
  border-radius: 4px;
  &:hover {
    background-color: lightgray;
  }
`;
