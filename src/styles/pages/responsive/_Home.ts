import { css } from "styled-components";
import { forSize } from "../../Mixins";

export const Grid = css`
  ${forSize("tablet-small", `
    width: 100%;
    flex-direction: column;
  `)}
  ${forSize("phone-mid", `
    width: 50%;
  `)}
`;

export const Other = css``;
