import {createPool} from 'mysql'

export const cxMysql = createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'bdinstrumentos',
    port: 3306,
    connectionLimit: 100 //100 es el valor por defecto
  });
  