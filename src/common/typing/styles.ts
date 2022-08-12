export type ForSize = "phone"
| "phone-mid"
| "phone-big"
| "phone-xbig"
| "tablet-small"
| "tablet-portrait"
| "tablet-landscape"
| "desktop"
| "desktop-mid"
| "desktop-big"
| "desktop-xbig"
| "tv-small"
| "tv-4k";

export type Flex = {
  justify: "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "left"
  | "normal"
  | "revert"
  | "right"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "start"
  | "stretch"
  | "unset";
  gap?: string;
  align?: "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "normal"
  | "revert"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch"
  | "unset";
};

export type Grid = {
  columns: string;
  gap?: string;
};

export type Text = {
  size: string;
  weight?: string;
  lineHeight?: string;
  align?: "center"
  | "end"
  | "inherit"
  | "initial"
  | "justify"
  | "left"
  | "revert"
  | "right"
  | "start"
  | "unset"
  | "-webkit-auto"
  | "-webkit-center"
  | "-webkit-left"
  | "-webkit-match-parent"
  | "-webkit-right";
};

export type Content = {
  width?: string;
  padding?: string;
};

export type BackgroundImage = {
  image: string;
  color?: string;
};

export interface LabelI {
  radio?: boolean;
  check?: boolean;
}

export interface TextI {
  radio?: boolean;
  check?: boolean;
}
