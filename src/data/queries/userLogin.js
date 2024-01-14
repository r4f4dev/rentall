// GrpahQL 
import {
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import userLoginType from '../types/userLoginType';
// Authentication Utils
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { auth } from '../../config';
// Sequelize models
import { User, UserLogin, UserClaim, UserProfile } from '../../data/models';
const userLogin = {
  type: userLoginType,
  args: {
    phone: { type: new NonNull(StringType) },
    verificationCode: { type: new NonNull(IntType) },
  },
  async resolve({ request, response }, {
    phone,
    verificationCode,
  }) {
    // Check if user already logged in
    if (!request.user) {
      // Check if the user is already exists
      let userLogin = await User.findOne({
        // attributes: ['id', 'phone', 'verificationCode', 'userBanStatus', 'userDeletedAt'],
        attributes: ['id', 'phone', 'verificationCode'],
        where: {
          phone: phone,
          verificationCode: verificationCode,
          userDeletedAt: null
        },
      });
      // Let the user in
      if (userLogin) {
        const expiresIn = 60 * 60 * 24 * 180; // 180 days
        const token = jwt.sign({ id: userLogin.dataValues.id, phone: userLogin.dataValues.phone }, auth.jwt.secret, { expiresIn });
        response.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
        return {
          status: "success",
        };

        // if (bcrypt.compareSync(verificationCode, userLogin.verificationCode)) {
        //   if (userLogin.userBanStatus == 1) {
        //     return {
        //       status: "userbanned",
        //     };
        //   } else if (userLogin.userDeletedAt != null) {
        //     return {
        //       status: "userDeleted",
        //     };
        //   } else {
        //     const expiresIn = 60 * 60 * 24 * 180; // 180 days
        //     const token = jwt.sign({ id: userLogin.id, phone: userLogin.phone }, auth.jwt.secret, { expiresIn });
        //     response.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
        //     return {
        //       status: "success",
        //     };
        //   }
        // } else {
        //   return {
        //     status: "verificationCode",
        //   };
        // }
      } else {
        return {
          status: "phone",
        };
      }
    } else {
      if (request.user.admin == true) {
        return {
          status: "adminLoggedIn",
        };
      } else {
        return {
          status: "loggedIn",
        };
      }
    }
  },
};
export default userLogin;
