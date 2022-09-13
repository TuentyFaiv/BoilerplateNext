import { useTranslation } from "next-i18next";
import { Formik, Form } from "formik";
import swal from "sweetalert";
// import { Actions } from "@typing";
import { SignupSchema, DEFAULT_SIGNUP_VALUES } from "@schemas";
// import { useAuthService } from "@services";
// import { useAppContext } from "@context";

import type { FormikHelpers } from "formik";
import type { SignupValues } from "@typing/services";

import { Input } from "@components";

export default function SignupForm() {
  const { t } = useTranslation("formik");
  // const { dispatch } = useAppContext();
  // const { signup, signin } = useAuthService();

  const formTranslations = {
    required: t("required"),
    email: t("email-valid"),
    requiredTerms: t("required-terms")
  };

  const handleSubmit = async (values: SignupValues, actions: FormikHelpers<SignupValues>) => {
    try {
      actions.setSubmitting(true);

      // Here should put the signin() with await
      // await signup({ ...values });
      // const user = await signin({ email: values.email, password: values.password });
      actions.resetForm({ values: DEFAULT_SIGNUP_VALUES });

      // if (user) dispatch({ type: Actions.SIGNIN, payload: user });
    } catch (error) {
      let message = "¡Oh no!";
      if (error instanceof Error) message = error.message;

      swal("Error!", t(message, { ns: "errors" }) || message, "error");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={DEFAULT_SIGNUP_VALUES}
      validationSchema={SignupSchema(formTranslations)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="auth__form">
          <h1 className="auth__title">{t("signup-title", { ns: "auth" })}</h1>
          <Input
            label={t("first-name")}
            name="firstName"
            type="text"
            placeholder={t("first-name")}
          />
          <Input
            label={t("last-name")}
            name="lastName"
            type="text"
            placeholder={t("last-name")}
          />
          <Input
            label={t("email")}
            name="email"
            type="email"
            placeholder={t("email")}
          />
          <Input
            label={t("password")}
            name="password"
            type="password"
            placeholder={t("password")}
          />
          <Input
            label={t("repeat-password")}
            name="confirmPassword"
            type="password"
            placeholder={t("repeat-password")}
          />
          <button
            type="submit"
            className="auth__form-submit"
            disabled={(isSubmitting)}
          >
            {t("signin-submit")}
          </button>
        </Form>
      )}
    </Formik>
  );
}
