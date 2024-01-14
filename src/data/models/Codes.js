import DataType from "sequelize";
import Model from "../sequelize";

const Codes = Model.define("Codes", {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  phone: DataType.STRING,
  code: DataType.INTEGER,
  createdAt: DataType.DATE,
  updatedAt: DataType.DATE,
});

export default Codes;
