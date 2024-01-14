import TariffsType from "../../../types/siteadmin/TariffsType";
import { Tariffs } from "../../../../data/models";

import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";

const addTariff = {
  type: TariffsType,

  args: {
    name: { type: StringType },
    description: { type: StringType },
    host_commision: { type: IntType },
    guest_commision: { type: IntType },
    host_is_percent: { type: IntType },
    guest_is_percent: { type: IntType },
    is_only_commission: { type: IntType },
  },

  async resolve({ request }, { name, description, host_commision, guest_commision, host_is_percent,guest_is_percent, is_only_commission }) {
    if (request.user && request.user.admin == true) {
      const data = await Tariffs.create({
        name,
        description,
        host_commision,
        guest_commision,
        host_is_percent,
        guest_is_percent, 
        is_only_commission,
        created_at: new Date(),
      });

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

export default addTariff;
