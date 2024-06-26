// client app: http://notesapp-v1.dicodingacademy.com/
// powershell: pm2 start npm --name "notes-api" -- run "start:prod"
const hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
    const server = hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();