import DataType from "sequelize";
import Model from "../../sequelize";

const Tariffs = Model.define("Tariffs", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataType.STRING,
    allowNull: false,
  },

  description: {
    type: DataType.TEXT,
  },

  host_commision: {
    type: DataType.INTEGER,
    allowNull: false,
  },

  guest_commision: {
    type: DataType.INTEGER,
    allowNull: false,
  },

  host_is_percent: {
    type: DataType.INTEGER,
    allowNull: false,
  },

  guest_is_percent: {
    type: DataType.INTEGER,
    allowNull: false,
  },

  is_only_commission: {
    type: DataType.INTEGER,
    allowNull: false,
  },
});

export default Tariffs;
