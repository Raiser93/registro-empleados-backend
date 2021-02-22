import Server from './classes/server';
import { dbConfig } from './db/db-config';
import routerEmployee from './routes/employee.router';

const server = Server.instance;

server.app.use('/employee', routerEmployee);

server.start(() => {
    console.log(`Server listo en el puerto: ${server.port} \x1b[32m%s\x1b[0m`, 'online');
    dbConfig
        .sync().then(() => {
            console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
        })
        .catch((error: any) => {
            throw error;
        })
});