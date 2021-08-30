'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const likesService = require('../services/user-likes');

module.exports = {
    likeUser: (ctx) => {
        let followerId = ctx.state.user.id;
        let userId = ctx.params.id;
        return likesService.likeUser(userId, followerId)
    },
    unLikeUser: (ctx) => {
        let followerId = ctx.state.user.id;
        let userId = ctx.params.id;
        return likesService.unLikeUser(userId, followerId)
    }
};
