export type ObjStrCustom<T> = {
  [key: string]: T;
};

export type ObjStrCommon = {
  [key: string]: boolean | number | string;
};

export type Boot = {
  required: string;
};

export type BootAuthSignup = Boot & {
  requiredTerms: string;
  email: string;
};
