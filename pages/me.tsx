import * as React from "react";
import { useRouter } from "next/router";
import { useMeQuery } from "../generated/apolloComponents";
import withApollo from "../lib/with-apollo";
import Layout from "../components/Layout";

export const Me = () => {
  const { data, loading, error } = useMeQuery();
  const router = useRouter();

  if (error) {
    router.push("/login");
  }

  return (
    <Layout title="Me page">
      <div>
        {!loading && <h1>{data?.me?.firstName ?? "not authenticated"}</h1>}
      </div>
    </Layout>
  );
};

export default withApollo(Me);
