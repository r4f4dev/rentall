// Query Type
import TariffsType from "../../../types/siteadmin/TariffsType";

// Database models
import { Tariffs } from "../../../../data/models";

import { GraphQLList as List } from "graphql";

const getAllTariffs = {
  type: new List(TariffsType),

  async resolve({ request }, { currentPage, searchList }) {
    if (request.user && request.user.admin == true) {
      let data = await Tariffs.findAll();

      return data;
    } else {
      return {
        status: "failed",
      };
    }
  },
};

export default getAllTariffs;
