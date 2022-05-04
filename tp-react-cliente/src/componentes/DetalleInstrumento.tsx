import { Container, ListGroup, Nav, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import React, { Component, useState, useEffect } from "react";
//import json from '../datos/instrumentos.json';
import instrumento from './instrumento';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigation } from './Navbar';
import { getInstrumentoXIdFecth } from './funcionesapi';

export const DetalleInstrumento = () => {
    // const { instrumentos } = json
    // let instru: instrumento[] = instrumentos
    // console.log(instru)
    const { id } = useParams();
    console.log("id recuperado useParams: " + Number(id));
    //let a: number = 0
    // let instru: instrumento[] = instrumentos.find(inst => inst.id === id);
    /*console.log("recupero id de instrumento " + id);
    for (let i = 0; i < instru.length; i++) {
        if (instru[i].id === id) {
            console.log("for i :" + i)
            a = i;
            console.log(instru[a])
        }
    } */

    const [instru, setInstrumentos] = useState<instrumento[]>([]); //tuve que hacerlo con un array, sino no funcionaba
    const getInstrumentosResto = async () => {
        let datos: instrumento[] = await getInstrumentoXIdFecth(Number(id));
        console.log(datos);
        setInstrumentos(datos);
    }

    useEffect(() => {
        getInstrumentosResto();
    }, []);
    let imagen = instru[0]?.imagen ? instru[0].imagen : 'imageneshome.jpg'; //esta linea la tuve que poner porque me daba error, al iniciar la página con el array vacío no asigna el nombre de la imagen entonces la img sin ruta de foto rompe el programa
    return (
        <>
            <Navigation></Navigation>
            <Container fluid="md" >
                <a href='/instrumentos'><h5>Volver</h5></a>
                <Row className="justify-content-md-center mt-6 border" >
                    <Col sm={6}>
                        {
                            imagen.includes('http') ?
                                <img style={{ width: "300px" }} src={(imagen)} />
                                :
                                <img style={{ width: "300px" }} src={require(`../assets/images/${imagen}`)} />
                        }

                        <p style={{ textAlign: "justify" }}>{instru[0]?.descripcion}</p>
                    </Col>
                    <Col sm={4}><br></br> <Row>{instru[0]?.cantidadVendida} vendidos</Row>
                        <Row> {instru[0]?.instrumento}</Row>
                        <Row>${instru[0]?.precio} </Row>
                        <Row>{instru[0]?.marca}</Row>
                        <Row>{instru[0]?.modelo}</Row>
                        <Row><img style={{ width: "50px" }} src={require(`../assets/images/camion.png`)} />{(instru[0]?.costoEnvio === 'G') ? "Envío Gratis" : ("Costo Envío $" + instru[0]?.costoEnvio)}</Row>
                        <Row><Button>Agregar al carrito</Button></Row>
                    </Col>
                </Row><br></br>

            </Container>
        </>

    )

}