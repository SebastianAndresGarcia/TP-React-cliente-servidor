import { Router } from "express";
import { getInstrumentos, getInstrumentoXID,crearInstrumento,actualizarInstrumento,eliminarInstrumento} from "./controlador/controlador";

const router = Router();

router.get('/test', (requ,resp) => resp.send("HOLA MUNDO"));
router.get('/instrumentos', getInstrumentos);
router.get('/instrumentos/:id',getInstrumentoXID); //ese ":instrumento" debo recuperarlo en el controlador con un req.param.instrumento
router.post('/crearInstrumento', crearInstrumento); //acá hago un insert, entonces uso post
router.put('/actualizarInstrumento/:id', actualizarInstrumento);
router.delete('/eliminarInstrumento/:id', eliminarInstrumento);

export default router;
