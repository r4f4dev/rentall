import DataType from "sequelize";
import Model from "../sequelize";

const UzcardTransactions = Model.define("UzcardTransactions", {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  reservationId: DataType.INTEGER,
  transactionId: DataType.INTEGER,
  utrno: DataType.STRING,
  terminalId: DataType.STRING,
  merchantId: DataType.STRING,
  cardNumber: DataType.STRING,
  total: DataType.FLOAT,
  commission: DataType.FLOAT,
  status: DataType.INTEGER,
  statusComment: DataType.STRING,
  createdAt: DataType.DATE,
  updatedAt: DataType.DATE,
});

export default UzcardTransactions;
