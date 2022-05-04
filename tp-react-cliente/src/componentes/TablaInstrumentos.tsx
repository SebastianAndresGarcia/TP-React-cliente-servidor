import { Container, Table, Button } from 'react-bootstrap';
import React, { Component, useState, useEffect } from "react";
import instrumento from './instrumento';
import { Navigation } from './Navbar';
import { getInstrumentosJSONFetch, eliminarInstrumento } from './funcionesapi';


export const TablaInstrumentos = () => {

    const [ins, setInstrumentos] = useState<instrumento[]>([]);
    const [modalopen, setModal] = useState(false);

    const getInstrumentosResto = async () => {
        let datos: instrumento[] = await getInstrumentosJSONFetch();
        console.log(datos);
        setInstrumentos(datos);
    }

    useEffect(() => {
        getInstrumentosResto();
    }, []);

    const eliminar = async (id:number) => {
        
        await eliminarInstrumento(id);
        window.location.href  ="/TablaInstrumentos";
    }

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <div>
                    <br /><p><Button href='/FormABM/0'>Nuevo</Button></p>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Vendidos</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ins.map(instrumento => (
                            <tr>
                                <td>{instrumento.id}</td>
                                <td>{instrumento.instrumento}</td>
                                <td>{instrumento.precio}</td>
                                <td>{instrumento.cantidadVendida}</td>
                                <td><Button href= {`/FormABM/`+instrumento.id}>Modificar</Button></td>
                                <td><Button onClick={(e) => eliminar(instrumento.id)}>Eliminar</Button></td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}