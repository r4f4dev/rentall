import updateListingTariffIdType from '../../types/updateListingTariffIdType';
import { Listing } from "../../models";
import { GraphQLInt as IntType, GraphQLBoolean as BooleanType } from "graphql";
const updateListingTariffId = {
  type: updateListingTariffIdType,
  args: {
    id: { type: IntType },
    tariff_id: { type: IntType },
  },
  async resolve({ request }, { id, tariff_id }) {
    if (request.user && request.user.admin == true) {
      const Update = await Listing.update(
        {
          tariff_id: tariff_id,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return {
        status: "success",
      };
    } else {
      return {
        status: "failed",
      };
    }
  },
};
export default updateListingTariffId;
