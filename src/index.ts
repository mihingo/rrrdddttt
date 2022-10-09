import { MikroORM } from "@mikro-orm/core";
import microConfigs from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { WemisResolver } from "./resolvers/wemisResolver";
import { PostResolver } from "./resolvers/post";

const main = async () => {
  const orm = await MikroORM.init(microConfigs);
  await orm.getMigrator().up();
  const ormFork = orm.em.fork();
  const WeApp = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [WemisResolver, PostResolver],
      validate: false,
    }),
    context: () => ({ em: ormFork }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: WeApp });
  WeApp.listen(4000, () => {
    console.log("Server started on localhost:4000");
  });
};

main();
