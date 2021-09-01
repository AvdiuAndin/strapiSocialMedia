# Strapi application

Node version: 14.17.5
Strapi version: 3.6.8
Ubuntu: Focal

##UPDATE 
Added docker compose file

Once u clone the Next js repository, go to the folder and build a docker image by running this command

``` docker build -t next_app . ```

Then u clone Strapi app repository, go the folder of strapi app and build a docker image

``` docker build -t strapi_app . ```

In this folder you can run this command to run the applications

``` docker-compose up ```

Run the application by running `strapi dev`

This strapi application is build to support these features:

1. As a user I want to create a profile. 
2. As a user I want to Sign-in to my profile. 
3. As a user I want to view other users' profiles 
4. As a user I want the ability to "like" other user's profiles. 
5. As a user I want to be notified when I get a "like"


The database used is SQLite just because its easier to start the app

When the application is started, you must set permissions to "Authenticated" role in admin panel to these methods:
1. likeuser
2. unlikeuser
3. getuserprofilebyuserid
4. getuserprofiles

This is required since the front-end application comunicates via these methods

In the swagger documentation you can see the endpoints under: 'users' section.

Folders Structure:
api/user-likes
api/users
lib/socketService
config/function/boostrap.js

These files have been created/modified, in order to implement to features above.