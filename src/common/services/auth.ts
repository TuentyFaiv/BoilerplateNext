/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useTranslation } from "next-i18next";
import { useServiceContext } from "@context";

import type {
  BodySignup,
  ForgotValues,
  ReturnSignin,
  ReturnSignup,
  SigninValues
} from "@typing/services";

export default function useAuthService() {
  const { api } = useServiceContext();
  const { t } = useTranslation("errors");

  const signin = async (values: SigninValues) => {
    const { payload } = await api!.get<ReturnSignin>({
      endpoint: "get/Login",
      query: `?tpId=${values.email}&password=${values.password}`,
      secure: false,
      errorMessage: t("signin-error")
    });

    return payload;
  };

  const signup = async (values: BodySignup) => {
    const { payload } = await api!.post<BodySignup, ReturnSignup>({
      endpoint: "insertClient",
      body: values,
      secure: false,
      errorMessage: t("signup-error")
    });

    return payload;
  };

  const forgot = async (values: ForgotValues) => {
    const { payload } = await api!.get<ReturnSignin>({
      endpoint: "resetPassword",
      query: `?tpId=${values.email}&action=Reset`,
      secure: false,
      errorMessage: t("forgot-error")
    });

    return payload;
  };

  return {
    signin,
    signup,
    forgot
  };
}
