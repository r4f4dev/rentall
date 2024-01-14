import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLList as List,
} from "graphql";

import { Tariffs } from "../../models";

const TariffsType = new ObjectType({
  name: "TariffsType",
  fields: {
    id: {
      type: IntType,
    },
    name: {
      type: StringType,
    },
    description: {
      type: StringType,
    },
    host_commision: {
      type: IntType,
    },
    guest_commision: {
      type: IntType,
    },
    host_is_percent: {
      type: IntType,
    },
    guest_is_percent: {
      type: IntType,
    },
    is_only_commission: {
      type: IntType,
    },
  },
});

export default TariffsType;
