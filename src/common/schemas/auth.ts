import * as Yup from "yup";

import type {
  Boot,
  BootAuthSignup
} from "@typing/types";
import type {
  ForgotValues,
  ResetValues,
  SigninValues,
  SignupValues
} from "@typing/services";

export const ForgotSchema = (boot: Boot) => Yup.object().shape({
  email: Yup.string().required(boot.required)
});

export const DEFAULT_FORGOT_VALUES: ForgotValues = {
  email: ""
};

export const SigninSchema = (boot: Boot) => Yup.object().shape({
  email: Yup.string().required(boot.required),
  password: Yup.string().required(boot.required)
});

export const DEFAULT_SIGNIN_VALUES: SigninValues = {
  email: "",
  password: ""
};

export const ResetSchema = (boot: Boot) => Yup.object().shape({
  password: Yup.string().required(boot.required),
  confirmPassword: Yup.string().required(boot.required)
});

export const DEFAULT_RESET_VALUES: ResetValues = {
  password: "",
  confirmPassword: ""
};

export const SignupSchema = (boot: BootAuthSignup) => Yup.object().shape({
  firstName: Yup.string().required(boot.required),
  lastName: Yup.string().required(boot.required),
  country: Yup.string().required(boot.required),
  email: Yup.string().email(boot.email).required(boot.required),
  phoneNumber: Yup.string().required(boot.required),
  phoneCode: Yup.string().required(boot.required),
  password: Yup.string().required(boot.required),
  confirmPassword: Yup.string().required(boot.required),
  terms: Yup.boolean().oneOf([true], boot.requiredTerms)
});

export const DEFAULT_SIGNUP_VALUES: SignupValues = {
  firstName: "",
  lastName: "",
  country: "",
  email: "",
  phoneNumber: "",
  phoneCode: "",
  password: "",
  confirmPassword: "",
  terms: false
};
