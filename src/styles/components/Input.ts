import styled from "styled-components";
import Image from "next/image";
import { ErrorMessage, Field } from "formik";

import type { LabelI, TextI } from "@typing";

export const Label = styled.label<LabelI>`
  width: 100%;
`;

export const Text = styled.p<TextI>``;

export const Input = styled.input``;

export const Show = styled.button``;
export const ShowIcon = styled(Image)``;

export const Profile = styled.div``;
export const ProfileImage = styled(Image)``;

export const File = styled.input``;

export const TextArea = styled.textarea`
  width: 100%;
`;

export const Radio = styled(Field)``;
export const RadioError = styled(ErrorMessage)``;

export const Checkbox = styled(Field)``;
export const CheckboxError = styled(ErrorMessage)``;

export const Select = styled.div`
  width: 100%;
`;
export const SelectValue = styled.p``;
export const SelectOptions = styled.div``;
export const SelectOption = styled.span``;
