/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useTranslation } from "next-i18next";
import { useServiceContext } from "@context";

import type {
  BodySignup,
  ForgotValues,
  ReturnSignin,
  ReturnSignup,
  SigninValues
} from "@typing";

export default function useAuthService() {
  const { api } = useServiceContext();
  const { t } = useTranslation("errors");

  const signin = async (values: SigninValues) => {
    const { data } = await api!.get<ReturnSignin>({
      endpoint: "get/Login",
      query: `?tpId=${values.email}&password=${values.password}`,
      secure: false,
      errorMessage: t("signin-error")
    });

    return data;
  };

  const signup = async (values: BodySignup) => {
    const { data } = await api!.post<BodySignup, ReturnSignup>({
      endpoint: "insertClient",
      body: values,
      secure: false,
      errorMessage: t("signup-error")
    });

    return data;
  };

  const forgot = async (values: ForgotValues) => {
    const { data } = await api!.get<ReturnSignin>({
      endpoint: "resetPassword",
      query: `?tpId=${values.email}&action=Reset`,
      secure: false,
      errorMessage: t("forgot-error")
    });

    return data;
  };

  return {
    signin,
    signup,
    forgot
  };
}
