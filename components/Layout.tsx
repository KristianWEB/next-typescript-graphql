import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { useMeQuery } from "../generated/apolloComponents";
import withApollo from "../lib/with-apollo";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Container = styled.div`
  background-color: #f0f2f5;
`;

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => {
  const { data } = useMeQuery();

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/me">
            <a>Me</a>
          </Link>{" "}
          |{" "}
          <Link href="/register">
            <a>Register</a>
          </Link>{" "}
          |{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>{" "}
          |{" "}
          <Link href="/forgot-password">
            <a>Forgot Password</a>
          </Link>{" "}
          |{" "}
          {data?.me && (
            <>
              <Link href="/logout">
                <a>Logout</a>
              </Link>{" "}
              |{" "}
            </>
          )}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </Container>
  );
};

export default withApollo(Layout);
