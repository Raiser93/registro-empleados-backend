import Server from './classes/server';
import { dbConfig } from './db/db-config';
import routerEmployee from './routes/employee.router';

const server = Server.instance;

server.app.use('/employee', routerEmployee);

server.start(() => {
    console.log(`Server listo en el puerto: ${server.port}`);
    dbConfig
        .sync().then(() => {
            console.log('DB On');
        })
        .catch((error: any) => {
            console.log(error);
            throw 'Error';
        })
});