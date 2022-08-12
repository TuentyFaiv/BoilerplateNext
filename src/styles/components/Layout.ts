import styled from "styled-components";
import { flex } from "../Mixins";
import * as Responsive from "./responsive/_Layout";

export const Container = styled.main`
  ${flex({ justify: "flex-end", align: "center" })}
  flex: 1;
  min-height: 100vh;
  flex-direction: column;
  ${Responsive.Container}
`;

export const Other = styled.div`
`;
