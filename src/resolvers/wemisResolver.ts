import { __PROD__ } from "../utils/constants";
import { Resolver, Query } from "type-graphql";

@Resolver()
export class WemisResolver {
  @Query(() => String)
  hello() {
    return "Hello World!";
  }
  @Query(() => String)
  wemis() {
    return `Welcome to wemis system! This is ${
      __PROD__ ? "" : "not"
    } Production Environment!  `;
  }
}
