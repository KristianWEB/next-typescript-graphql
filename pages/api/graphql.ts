import { ApolloServer } from "apollo-server-micro";
import { createResolverContext } from "../../lib/with-apollo";
import schema from "../../lib/schema";

const apolloServer = new ApolloServer({
  schema,
  context: createResolverContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer;
