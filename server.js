const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: '0.0.0.0',
    });
    server.route(routes);
//     server.route({
//         method: 'GET',
//   	   path: '/',
//         handler: (request, h) => {
//             return 'Hello World!';
//         }
//   });


    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();
