import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
} from "graphql";

const updateListingTariffIdType = new ObjectType({
  name: "updateListingTariffId",
  fields: {
    id: { type: IntType },
    tariff_id: { type: IntType },
  },
});
export default updateListingTariffIdType;
