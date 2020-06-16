import withApollo from "../lib/with-apollo";
import Link from "next/link";
import { useLoginMutation } from "../generated/apolloComponents";
import Layout from "../components/Layout";

const Index = () => {
  const [login] = useLoginMutation();
  return (
    <Layout title="Index page">
      <div>
        You're signed in as nul and you're null goto{" "}
        <Link href="/about">
          <a>static</a>
        </Link>{" "}
        page.
        <button
          onClick={() =>
            login({
              variables: {
                email: "kristian@kristian.com",
                password: "Kristian345",
              },
            })
          }
        >
          call login mutation
        </button>
      </div>
    </Layout>
  );
};

export default withApollo(Index);
