export interface SigninValues {
  email: string;
  password: string;
}

export interface ResetValues {
  password: string;
  confirmPassword: string;
}

export type ForgotValues = Omit<SigninValues, "password">;

export interface SignupValues extends ResetValues {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phoneNumber: string;
  phoneCode: string;
  terms: boolean;
}

export type ReturnSignin = any;

export type BodySignup = any;

export type ReturnSignup = any;
