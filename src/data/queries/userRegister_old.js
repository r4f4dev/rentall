// GrpahQL
import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull
} from 'graphql';
import userRegisterType from '../types/userRegisterType';

// Authentication Utils
import jwt from 'jsonwebtoken';
import { auth } from '../../config';

// Sequelize models
import { User, UserProfile, AdminUser, UserVerifiedInfo, EmailToken } from '../../data/models';

// Helper
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { sendServerEmail } from '../../core/email/sendServerEmail';

const userRegister = {

  type: userRegisterType,

  args: {
    firstName: { type: StringType },
    lastName: { type: StringType },
    phone: { type: new NonNull(StringType) },
    password: { type: new NonNull(StringType) },
    dateOfBirth: { type: StringType }
  },

  async resolve({ request, response }, {
    firstName,
    lastName,
    phone,
    password,
    dateOfBirth
  }) {

    let loginName = 'phone';
    let claimType = 'urn:email:access_token';
    let updatedFirstName = capitalizeFirstLetter(firstName);
    let updatedLastName = capitalizeFirstLetter(lastName);
    let displayName = updatedFirstName + ' ' + updatedLastName;
    let content;

    // Check if user already logged in
    if (!request.user) {
      // Check if the user is already exists
      const checkUser = await User.findOne({
        attributes: ['id', 'phone'],
        where: {
          phone: phone,
          userDeletedAt: null
        },
      });

      // If already exists throw an error
      if (checkUser) {
        return {
          status: "phone",
        };
      } else {

        // Check phone is used by admin users
        // const getAdminUserId = await AdminUser.find({
        //   attributes: ['id'],
        //   where: { phone },
        // });

        // if (getAdminUserId) {
        //   return {
        //     status: 'phone'
        //   };
        // }

        // Create new User & Profile
        const createUser = await User.create({
          phone,
          emailConfirmed: true,
          password: User.generateHash(password),
          type: loginName,
          profile: {
            displayName,
            firstName: updatedFirstName,
            lastName: updatedLastName,
            dateOfBirth,
          },
          userVerifiedInfo: {
            isEmailConfirmed: true
          },
          // emailToken: {
          //   token: Date.now(),
          //   email
          // }
        }, {
            include: [
              { model: UserProfile, as: "profile" },
              { model: UserVerifiedInfo, as: 'userVerifiedInfo' },
              // { model: EmailToken, as: 'emailToken' },
            ],
          });
      
        if (createUser) {
          const expiresIn = 60 * 60 * 24 * 180; // 180 days
          const token = jwt.sign({ id: createUser.id, phone: createUser.phone }, auth.jwt.secret, { expiresIn });
          response.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
          // const getToken = await EmailToken.findOne({ 
          //   attributes: ['token'],
          //   where: { 
          //     userId: createUser.id 
          //   },
          //   raw: true 
          // });

          content = {
            // token: getToken && getToken.token,
            name: updatedFirstName,
            // email
          };

          // sendServerEmail(email, 'welcomeEmail', content);

          return await {
            // emailToken: getToken && getToken.token,
            status: "success",
          };
        } else {
          return {
            status: "failed",
          };
        }

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

export default userRegister;
