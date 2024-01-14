import UserType from '../types/UserType';
import { User } from '../models';
const getCheckUserStatus = {
    type: UserType,
    async resolve({ request }) {
        // Check if user already logged in
        if (request.user && !request.user.admin) {
            const userData = await User.findOne({
                attributes: [
                    'id', 'phone'
                ],
                where: {
                    id: request.user.id,
                    phone: request.user.phone,
                    userDeletedAt: null
                }
            })
            if (userData) {
                return {
                    status: 'UserExist',
                    userExistStatus: false
                }
            } else {
                return {
                    status: 'NoUserExist',
                    userExistStatus: true
                };
            }
        } else {
            return {
                status: "notLoggedIn",
                userExistStatus: true
            };
        }
    }
};
export default getCheckUserStatus;