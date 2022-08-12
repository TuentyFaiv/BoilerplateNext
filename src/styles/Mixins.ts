import { css } from "styled-components";

import type {
  BackgroundImage,
  Content,
  Flex,
  ForSize,
  Grid,
  ObjStrCustom,
  Text
} from "@typing";

export const forSize = (size: ForSize, content: string) => {
  const medias: ObjStrCustom<string> = {
    phone: "max-width: 320px",
    "phone-mid": "max-width: 375px",
    "phone-big": "max-width: 425px",
    "phone-xbig": "max-width: 535px",
    "tablet-small": "max-width: 635px",
    "tablet-portrait": "max-width: 768px",
    "tablet-landscape": "max-width: 900px",
    desktop: "max-width: 1024px",
    "desktop-mid": "max-width: 1200px",
    "desktop-big": "max-width: 1440px",
    "desktop-xbig": "max-width: 1920px",
    "tv-small": "max-width: 2100px",
    "tv-4k": "max-width: 2560px"
  };

  return medias[size] ? css`
    @media screen and (${medias[size]}) {
      ${content}
    }
  ` : "";
};

export const flex = ({ justify, gap, align = "center" }: Flex) => {
  const justifyContent = justify ? `justify-content: ${justify};` : "";
  const gapContent = gap ? `gap: ${gap};` : "";
  const alignContent = align ? `align-items: ${align};` : "";

  return css`
    display: flex;
    ${justifyContent}
    ${gapContent}
    ${alignContent}
  `;
};

export const grid = ({ columns, gap }: Grid) => {
  const columnsContent = columns ? `grid-template-columns: ${columns};` : "";
  const gapContent = gap ? `gap: ${gap};` : "";

  return css`
    display: grid;
    ${columnsContent}
    ${gapContent}
  `;
};

export const text = ({ size, weight, lineHeight, align }: Text) => {
  const fontWeight = weight ? `font-weight: ${weight};` : "";
  const lineHeightContent = lineHeight ? `line-height: ${lineHeight};` : "";
  const textAlign = align ? `text-align: ${align};` : "";

  return css`
    font-style: normal;
    font-size: ${size};
    ${fontWeight}
    ${lineHeightContent}
    ${textAlign}
  `;
};

export const content = ({ width = "1500px", padding = "0 16px" }: Content) => {
  const maxWidth = width ? `max-width: ${width};` : "";
  const paddingContent = padding ? `padding: ${padding};` : "";

  return css`
    display: block;
    width: 100%;
    ${maxWidth}
    margin: 0 auto;
    ${paddingContent}
  `;
};

export const backgroundImage = ({ image, color }: BackgroundImage) => {
  const background = color
    ? `background: ${image}, ${color};`
    : `background-image: ${image};`;

  return css`
    ${background}
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `;
};
