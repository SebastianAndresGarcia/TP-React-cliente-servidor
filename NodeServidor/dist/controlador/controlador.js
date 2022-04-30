"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarInstrumento = exports.actualizarInstrumento = exports.crearInstrumento = exports.getInstrumentoXID = exports.getInstrumentos = void 0;
const mysqldb_1 = require("../mysqldb");
const getInstrumentos = (req, res) => new Promise((resolve, reject) => {
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err); //como respuesta le mando el error en formato json, se muestra en el servidor
            return;
        }
        console.log('MySQL Connection: ', connection.threadId);
        connection.query('SELECT * FROM instrumentos', (err, results) => {
            let instrumentos = [];
            results.forEach((result) => {
                instrumentos.push(JSON.parse(JSON.stringify(result)));
            });
            if (err)
                console.error(err);
            //console.log('User Query Results: ', results);
            res.send(instrumentos); //devuelve como resultado un json porque yo así lo especifiqué en la línea 5 de index.ts
            console.log(instrumentos);
        });
    });
});
exports.getInstrumentos = getInstrumentos;
const getInstrumentoXID = (req, res) => new Promise((resolve, reject) => {
    const id = parseInt(req.params.id); //me traigo "id" de rutas.ts 
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query('SELECT * FROM instrumentos WHERE id = ?', [id], (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getInstrumentoXID = getInstrumentoXID;
const crearInstrumento = (req, res) => new Promise((resolve, reject) => {
    const { id, instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = req.body; //recupero los valores del cuerpo de la llamada
    var values = [id, instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion];
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = 'INSERT INTO instrumentos(id, instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?,?, ?, ?, ?, ?,?,?,?)';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({ message: "Error al tratar de insertar" });
                }
                else {
                    res.json({ message: "Instrumento Insertado con exito" });
                    //alert("carga satisfactoria de empleado"); no se puede colocar acá: [nodemon] app crashed - waiting for file changes before starting... 
                }
            });
        }
    });
});
exports.crearInstrumento = crearInstrumento;
const actualizarInstrumento = (req, res) => new Promise((resolve, reject) => {
    const { instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = req.body;
    const id = parseInt(req.params.id);
    var values = [instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion];
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = 'UPDATE instrumentos SET instrumento=?, marca=?, modelo=?, imagen=?, precio=?, costoEnvio=?, cantidadVendida=?, descripcion=? WHERE id=?';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({ message: "Error al actualizar " + err });
                }
                else {
                    res.json({ message: "Instrumento Actualizado con exito" });
                }
            });
        }
    });
});
exports.actualizarInstrumento = actualizarInstrumento;
const eliminarInstrumento = (req, res) => new Promise((resolve, reject) => {
    const id = parseInt(req.params.id);
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query('DELETE FROM instrumentos WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error(err);
                res.json({ message: "Error al tratar de Eliminar" });
            }
            else {
                res.json({ message: "Instrumento Eliminado con exito" });
            }
        });
    });
});
exports.eliminarInstrumento = eliminarInstrumento;
