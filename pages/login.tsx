import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/inputField";
import { useLoginMutation } from "../generated/apolloComponents";
import withApollo from "../lib/with-apollo";

const Login = () => {
  const router = useRouter();
  const [login] = useLoginMutation();

  return (
    <Layout title="Login page">
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (data, { setErrors }) => {
          const response = await login({
            variables: data,
          });
          if (!response?.data?.login) {
            setErrors({
              email: "invalid login",
            });
            return;
          }
          router.push("/");
        }}
        initialValues={{
          email: "",
          password: "",
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
            <Field
              name="password"
              placeholder="password"
              type="password"
              component={InputField}
            />
            <button type="submit">submit</button>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo(Login);
