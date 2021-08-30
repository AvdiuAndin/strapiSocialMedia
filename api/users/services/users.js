module.exports = {
    getProfilesOfUsers: (requestingUserId) => {
        return strapi.plugins['users-permissions'].models.user
        .query()
        .select("users-permissions_user.id","users-permissions_user.username","users-permissions_user.email")
        .count('user_likes.id as liked')
        .whereNot({"users-permissions_user.id": requestingUserId})
        .leftJoin('user_likes', function(){
            this.on('users-permissions_user.id','user_likes.user')
            .on('user_likes.follower', '=', strapi.connections.default.raw('?', [requestingUserId]))
        })
        .groupBy("users-permissions_user.id")
    },
    getUserProfileByUserId: (userId) => {
        return strapi.plugins['users-permissions'].models.user
        .query()
        .select("users-permissions_user.id","users-permissions_user.username","users-permissions_user.email")
        .count("numberOfLikes.id as numberOfLikes")
        .count("numberOfLikedUsers.id as numberOfLikedUsers")
        .where({"users-permissions_user.id": userId})
        .leftJoin('user_likes as numberOfLikes', 'numberOfLikes.user', "users-permissions_user.id")
        .leftJoin('user_likes as numberOfLikedUsers', 'numberOfLikes.follower', "users-permissions_user.id")
        .groupBy("users-permissions_user.id")
        .first()

    },
}