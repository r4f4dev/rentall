import DataType from 'sequelize';
import Model from '../sequelize';
import bcrypt from 'bcrypt';
import { NULL } from 'graphql/language/kinds';
const User = Model.define('User', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  email: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
    allowNull: true,
    defaultValue: null
  },
  password: {
    type: DataType.STRING,
    allowNull: true,
  },
  emailConfirmed: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
  type: {
    type: DataType.STRING,
  },
  userBanStatus: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
  userDeletedAt: {
    type: DataType.DATE,
  },
  phone: {
    type: DataType.STRING,
  },
  verificationCode: {
    type: DataType.INTEGER,
  },
  codeUpdatedAt: {
    type: DataType.DATE,
  },
}, 
{
    classMethods: {
      generateHash: function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      }
    },
    indexes: [
      // { fields: ['email'] },
      { fields: ['phone'] },
    ],
  });
  User['generateHash'] = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

export default User;
