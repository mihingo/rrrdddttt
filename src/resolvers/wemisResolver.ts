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
    return "Welcom to wemis system! Is this is Prod?  " + __PROD__;
  }
}
