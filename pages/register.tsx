import React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/inputField";
import { useRegisterMutation } from "../generated/apolloComponents";
import withApollo from "../lib/with-apollo";

const Register = () => {
  const [register] = useRegisterMutation();

  return (
    <Layout title="Register page">
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (data, { setErrors }) => {
          try {
            await register({
              variables: {
                data,
              },
            });
          } catch (error) {
            const errors: { [key: string]: string } = {};

            error.graphQLErrors[0].extensions?.exception.validationErrors.forEach(
              (validationErr: any) => {
                Object.values(validationErr.constraints).forEach(
                  (message: any) => {
                    errors[validationErr.property] = message;
                  }
                );
              }
            );
            setErrors(errors);
          }
        }}
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              placeholder="firstName"
              component={InputField}
            />
            <Field
              name="lastName"
              placeholder="lastName"
              component={InputField}
            />
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

export default withApollo(Register);
