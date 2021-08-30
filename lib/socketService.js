const { SocketAddress } = require('net');

const connections = [];
let io = null;
module.exports = {
    setUpSocket: () => {
        io = require('socket.io')(strapi.server, {
            cors: {
              origin: "http://localhost:3000",
              methods: ["GET", "POST"],
              allowedHeaders: ["my-custom-header"],
              credentials: true
            }
        });
    
        io.on('connection', async function(socket) {

            let jwt = socket.handshake.auth.token;
            if(jwt != null){
                let user = await strapi.plugins["users-permissions"].services.jwt.verify(jwt)// decode jwt;
                connections.push({
                    userId: user.id,
                    socketId: socket.id
                })
            }

            socket.on("disconnect", function(){
                let index = connections.findIndex((usr) => {
                    return usr.socketId === socket.id;
                });
                if(index != -1){
                    connections.splice(index, 1);
                }
            });
        });
    },
    sendNotifiationToUserId: (userId, data) => {
        let user = connections.find((userSocketConnection) => {
            return userSocketConnection.userId === userId
        });
        
        if(user != null){
            io.to(user.socketId).emit("data", data);
        }
    }

    
}