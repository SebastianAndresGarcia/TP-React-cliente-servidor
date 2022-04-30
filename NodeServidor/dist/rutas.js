"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("./controlador/controlador");
const router = (0, express_1.Router)();
router.get('/test', (requ, resp) => resp.send("HOLA MUNDO"));
router.get('/instrumentos', controlador_1.getInstrumentos);
router.get('/instrumentos/:id', controlador_1.getInstrumentoXID); //ese ":instrumento" debo recuperarlo en el controlador con un req.param.instrumento
router.post('/crearInstrumento', controlador_1.crearInstrumento); //acá hago un insert, entonces uso post
router.put('/actualizarInstrumento/:id', controlador_1.actualizarInstrumento);
router.delete('/eliminarInstrumento/:id', controlador_1.eliminarInstrumento);
exports.default = router;
