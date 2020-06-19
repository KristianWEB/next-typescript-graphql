import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLogoutMutation } from "../generated/apolloComponents";
import withApollo from "../lib/with-apollo";

const Logout = () => {
  const router = useRouter();
  const [logout, { client }] = useLogoutMutation();

  useEffect(() => {
    const logoutFn = async () => {
      await logout();
      router.push("/login");
      client?.resetStore();
    };

    logoutFn();
  }, []);

  return null;
};

export default withApollo(Logout);
