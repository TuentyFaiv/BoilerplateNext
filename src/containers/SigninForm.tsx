import { useTranslation } from "next-i18next";
import { Formik, Form } from "formik";
import swal from "sweetalert";
// import { Actions } from "@typing";
import { SigninSchema, DEFAULT_SIGNIN_VALUES } from "@schemas";
// import { useAuthService } from "@services";
// import { useAppContext } from "@context";

import type { FormikHelpers } from "formik";
import type { SigninValues } from "@typing";

import { Input } from "@components";

export default function SigninForm() {
  const { t } = useTranslation("formik");
  // const { dispatch } = useAppContext();
  // const { signin } = useAuthService();

  const formTranslations = {
    required: t("required")
  };

  const handleSubmit = async (values: SigninValues, actions: FormikHelpers<SigninValues>) => {
    try {
      actions.setSubmitting(true);
      // const user = await signin(values);
      actions.resetForm({ values: DEFAULT_SIGNIN_VALUES });
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
      initialValues={DEFAULT_SIGNIN_VALUES}
      validationSchema={SigninSchema(formTranslations)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="auth__form">
          <h1 className="auth__title">{t("signin-title", { ns: "auth" })}</h1>
          <Input
            label={t("email")}
            name="email"
            type="text"
            placeholder={t("email")}
          />
          <Input
            label={t("password")}
            name="password"
            type="password"
            placeholder={t("password")}
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
