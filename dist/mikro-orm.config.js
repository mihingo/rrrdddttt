"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const constants_1 = require("./utils/constants");
exports.default = {
    migrations: {
        tableName: "mikro_orm_migrations",
        path: "dist/migrations",
        pathTs: "src/migrations",
        glob: "!(*.d).{js,ts}",
    },
    entities: [Post_1.Post],
    dbName: "wemisdev",
    type: "postgresql",
    debug: !constants_1.__PROD__,
};
//# sourceMappingURL=mikro-orm.config.js.map