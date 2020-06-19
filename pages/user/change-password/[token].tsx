import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../../../components/fields/inputField";
import { useChangePasswordMutation } from "../../../generated/apolloComponents";
import withApollo from "../../../lib/with-apollo";

const ChangePassword = () => {
  const router = useRouter();
  const [changePassword] = useChangePasswordMutation();
  const { token }: { token?: string } = router.query;

  if (!token) {
    return null;
  }

  return (
    <Layout title="Change Password">
      <Formik
        onSubmit={async ({ password }) => {
          await changePassword({
            variables: {
              data: {
                password,
                token,
              },
            },
          });
          router.push("/");
        }}
        initialValues={{
          password: "",
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="password"
              type="password"
              placeholder="password"
              component={InputField}
            />
            <button type="submit">change password</button>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo(ChangePassword);
