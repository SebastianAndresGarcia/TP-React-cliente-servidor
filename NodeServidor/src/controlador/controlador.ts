import { Request, Response } from "express";
import { cxMysql } from '../mysqldb';
import instrumento from "../instrumento";
import { resourceLimits } from "worker_threads";

export const getInstrumentos = (req: Request, res: Response) => new Promise((resolve, reject) => {
  cxMysql.getConnection((err, connection) => { //si falla la conexion, entra al if(err)
    if (err) {
      console.error(err);
      res.send(err); //como respuesta le mando el error en formato json, se muestra en el servidor
      return;
    }
    console.log('MySQL Connection: ', connection.threadId);
    connection.query('SELECT * FROM instrumentos', (err, results) => { //ejecuta la consulta
      let instrumentos: instrumento[]=[]
  
        results.forEach((result:any) => {
            instrumentos.push(JSON.parse(JSON.stringify(result)))
        })
      if (err) console.error(err);
      //console.log('User Query Results: ', results);
      res.send(instrumentos)  //devuelve como resultado un json porque yo así lo especifiqué en la línea 5 de index.ts
      console.log(instrumentos)
    });

  });
});

export const getInstrumentoXID = (req: Request, res: Response) => new Promise((resolve, reject) => {
  const id = parseInt(req.params.id); //me traigo "id" de rutas.ts 
  cxMysql.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.send(err);
      return;
    }
    connection.query('SELECT * FROM instrumentos WHERE id = ?', [id], (err, results) => { //esta es una funcion anonima no se le pone nombre, van los paréntesis(err,results) seguido del contenido
      if (err) console.error(err);
      res.send(results) 
      
    });
  });
});

export const crearInstrumento = (req: Request, res: Response) => new Promise((resolve, reject) => {
  
  const { id, instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = req.body; //recupero los valores del cuerpo de la llamada
  var values = [id, instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion];
  cxMysql.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.send(err);
      return;
    }
    else {
      let sql: string = 'INSERT INTO instrumentos(id, instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?,?, ?, ?, ?, ?,?,?,?)';
      connection.query(sql, values, (err, results) => {
        if (err) {
          console.error(err);
          res.json({ message: "Error al tratar de insertar" });
          
        } else {
          res.json({ message: "Instrumento Insertado con exito" });
          //alert("carga satisfactoria de empleado"); no se puede colocar acá: [nodemon] app crashed - waiting for file changes before starting... 
        }
      });
    }
  });
});

export const actualizarInstrumento = (req: Request, res: Response) => new Promise((resolve, reject) => {
  const {instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = req.body;
  const id = parseInt(req.params.id);
  var values = [instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion];
  cxMysql.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.send(err);
      return;
    }
    else {
      let sql: string = 'UPDATE instrumentos SET instrumento=?, marca=?, modelo=?, imagen=?, precio=?, costoEnvio=?, cantidadVendida=?, descripcion=? WHERE id=?';
      connection.query(sql, values, (err, results) => {
        if (err) {
          console.error(err);
          res.json({ message: "Error al actualizar " + err })
        } else {
          res.json({ message: "Instrumento Actualizado con exito" })
        }

      });
    }
  });
});

export const eliminarInstrumento = (req: Request, res: Response) => new Promise((resolve, reject) => {
  const id = parseInt(req.params.id);
  cxMysql.getConnection((err, connection) => {
    if (err) {
      console.error(err);
      res.send(err);
      return;
    }
    connection.query('DELETE FROM instrumentos WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error(err);
        res.json({ message: "Error al tratar de Eliminar" })
      } else {
        res.json({ message: "Instrumento Eliminado con exito" })
      }

    });
  });
});