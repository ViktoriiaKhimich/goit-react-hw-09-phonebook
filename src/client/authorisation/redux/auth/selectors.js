const isLogined = state => state.authorization.isLogined;


const getUserName = state => state.authorization.user.name;

export default {
    isLogined,
    getUserName,
}