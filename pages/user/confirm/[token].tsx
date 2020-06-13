import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

const Confirm = (token: string) => {
  // 11:56
  console.log(token);

  return <div>hi</div>;
};
export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  return {
    paths: [
      {
        params: {
          token: "230843298",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: { token: context?.params?.token } };
};

export default Confirm;
