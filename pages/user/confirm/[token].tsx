import React from "react";
import { useRouter } from "next/router";
import withApollo from "../../../lib/with-apollo";
import { useConfirmUserMutation } from "../../../generated/apolloComponents";

const Confirm = () => {
  const router = useRouter();
  const [confirmUser] = useConfirmUserMutation();
  const { token }: { token?: string } = router.query;

  if (!token) {
    return null;
  }

  const onConfirm = async () => {
    const response = confirmUser({
      variables: {
        token,
      },
    });
    router.push("/login");
  };

  return <button onClick={onConfirm}>Confirm user</button>;
};

export default withApollo(Confirm);
