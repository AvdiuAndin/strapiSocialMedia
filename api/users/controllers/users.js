const userService = require('../services/users');
module.exports = {
    getUserProfiles: (ctx) => {
        let id = ctx.state.user.id;
        return userService.getProfilesOfUsers(id);
    },
    getUserProfileByUserId: (ctx) => {
        let userId = ctx.params.id;
        return userService.getUserProfileByUserId(userId);
    }
}