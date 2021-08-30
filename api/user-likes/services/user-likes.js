'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    likeUser: (userId, followerId) => {
        return strapi.services['user-likes'].create({
            user: userId,
            follower: followerId
        });
    },
    unLikeUser: (userId, followerId) => {
        return strapi.services['user-likes'].delete({
            user: userId,
            follower: followerId
        });
    }
}
