import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap"
import { Navigate, useHref, useParams } from "react-router-dom";
import instrumento from "./instrumento";
import { getInstrumentoXIdFecth, guardarInstrumento } from './funcionesapi';


export const FormABM = () => {

    const { id } = useParams();
    const [ins, setInstrumento] = useState<instrumento>(new instrumento())

    const getInstrumentoResto = async () => {
        if (Number(id) !== 0) {
            let instrumento: instrumento[] = await getInstrumentoXIdFecth(Number(id));
            console.log(instrumento[0])
            setInstrumento(instrumento[0]);
        } else {
            let instru: instrumento = new instrumento();
            setInstrumento(instru);
        }
    }

    useEffect(() => {
        getInstrumentoResto();
    }, []);
    const guardar = async () => {
        console.log(ins);
        await guardarInstrumento(ins);
        window.location.href = "/TablaInstrumentos";
    }

    return (
        <>

            <Container>

                <br></br>
                <Form className="form-control">
                    <Form.Group className="mb-3" controlId="formulario">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="instrumento" name="instrumento" onChange={e => ins.instrumento = String(e.target.value)}
                            defaultValue={ins?.instrumento} />
                        <Form.Text className="text-muted">
                            Agregue el nombre del instrumento.
                        </Form.Text><br></br>
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="marca" name="marca" onChange={e => ins.marca = String(e.target.value)}
                            defaultValue={ins?.marca} />
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="text" placeholder="modelo" name="modelo" onChange={e => ins.modelo = String(e.target.value)}
                            defaultValue={ins?.modelo} /><br></br>
                        <Form.Label>Agregue una imagen</Form.Label>
                        <Form.Control type="text" required name="imagen" onChange={e => ins.imagen = String(e.target.value)}
                            defaultValue={ins?.imagen} />

                        <br></br><Form.Label>Precio</Form.Label>
                        <Form.Control type="number" placeholder="precio" name="precio" onChange={e => ins.precio = Number(e.target.value)}
                            defaultValue={ins?.precio} value={ins?.precio} />
                        <Form.Label>Costo de Envío</Form.Label>
                        <Form.Control type="text" placeholder="costoEnvio" name="costoEnvio" onChange={e => ins.costoEnvio = String(e.target.value)}
                            defaultValue={ins?.costoEnvio} />
                        <Form.Text className="text-muted">
                            Para envíos gratuitos agregue G.
                        </Form.Text>
                        <br></br>
                        <Form.Label>Cantidad Vendida</Form.Label>
                        <Form.Control type="number" placeholder="cantidadVendida" name="cantidadVendida" onChange={e => ins.cantidadVendida = Number(e.target.value)}
                            defaultValue={ins?.cantidadVendida} value={ins?.cantidadVendida}/>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" placeholder="descripción" name="descripcion" onChange={e => ins.descripcion = String(e.target.value)}
                            defaultValue={ins?.descripcion} />
                    </Form.Group>
                    <Button style={{ margin: "5px" }} variant="primary" onClick={() => guardar()}>
                        Guardar
                    </Button>
                    <Button style={{ margin: "5px" }} variant="primary" href="/TablaInstrumentos">
                        Salir
                    </Button>
                </Form>
            </Container>
        </>
    )
}