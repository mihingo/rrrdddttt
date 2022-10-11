import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { __PROD__ } from "./utils/constants";

export default {
  migrations: {
    tableName: "mikro_orm_migrations",
    path: "dist/migrations",
    pathTs: "src/migrations",
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post, User],
  dbName: "wemisdev",
  type: "postgresql",
  debug: !__PROD__,
} as Parameters<typeof MikroORM.init>[0];
