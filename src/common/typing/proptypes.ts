import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  MouseEvent
} from "react";
import type { FieldHookConfig } from "formik";
import type { ObjStrCustom } from "./types";
import type { HookModalFunc } from "./hooks";
import type {
  HOCDatasets,
  HOCDatasetsProps,
  HOCField,
  HOCFieldProps
} from "./hocs";

export interface InputProps extends HOCDatasetsProps, HOCDatasets {
  children?: ReactNode;
  id?: string;
  name: string;
  value?: string;
  checked: boolean;
  label?: string;
  label2?: string | null;
  payment?: boolean;
  onSelect?: (event?: MouseEvent) => void;
}

type InputElement = Omit<
DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
keyof FieldHookConfig<string>
>;

export type InputFieldProps = HOCFieldProps & HOCField & InputElement & {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
};

type AreaElement = Omit<
DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
keyof FieldHookConfig<string>
>;

export type AreaFieldProps = HOCFieldProps & HOCField & AreaElement & {
  id?: string;
  name: string;
  placeholder?: string;
};

export type FileFieldProps = HOCFieldProps & HOCField & InputElement & {
  id?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  profile?: boolean;
  onChange?: (values: File[] | File) => void;
};

type SelectOption = {
  value: string;
  label: string;
  key?: string;
};

export type SelectFieldProps = Omit<HOCFieldProps, "file"> & HOCField & {
  id?: string;
  name: string;
  options: SelectOption[];
  value?: string | null;
  withoutValue?: string;
  onSelect?: (value: unknown) => void;
};

export interface LoaderProps {
  msg?: string;
}

export interface ModalProps {
  children: (config: ObjStrCustom<boolean>) => ReactNode;
  title?: string;
  config?: ObjStrCustom<boolean>;
  open: boolean;
  onClose: HookModalFunc;
}

export interface LanguageProps {
  onClose?: VoidFunction;
}

export interface LayoutProps {
  children: ReactNode;
}
