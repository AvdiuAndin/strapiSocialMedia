'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
const socketService = require('../../../lib/socketService');

module.exports = {
    lifecycles: {
        afterCreate(result) {
            let user = result.user;
            let follower = result.follower;
            socketService.sendNotifiationToUserId(user.id, { "message": `You have been liked by: ${follower.username}`});
        },
    }
};
