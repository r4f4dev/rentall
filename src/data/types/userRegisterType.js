import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const UserRegister = new ObjectType({
  name: 'userRegister',
  fields: {
    firstName: { type: StringType },
    lastName: { type: StringType },
    phone: { type: new NonNull(StringType) },
    verificationCode: { type: new NonNull(IntType) },
    // password: { type: new NonNull(StringType) },
    // phone: { type: StringType },
    // password: { type: StringType },
    dateOfBirth: { type: StringType },
    status: {type: StringType},
    // emailToken: {type: StringType},
  },
});

export default UserRegister;
