
module.exports = async (ctx, next) => {
    let userId = ctx.params.id;
    let user = await strapi.plugins['users-permissions'].services.user.fetch({id: userId}, []);

    if(user == null){
        return ctx.notFound(`User with id ${userId} does not exists`);
    }

    await next();
}