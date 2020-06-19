import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/inputField";
import { useForgotPasswordMutation } from "../generated/apolloComponents";
import withApollo from "../lib/with-apollo";

const ForgotPassword = () => {
  const router = useRouter();
  const [forgotPassword] = useForgotPasswordMutation();

  return (
    <Layout title="Forgot Password">
      <Formik
        onSubmit={async (data) => {
          await forgotPassword({
            variables: data,
          });
        }}
        initialValues={{
          email: "",
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              placeholder="email"
              component={InputField}
            />
            <button type="submit">forgot password</button>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo(ForgotPassword);
