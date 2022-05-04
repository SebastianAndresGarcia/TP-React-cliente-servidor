import { Button } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import { Tarjeta } from './Tarjeta';
import React, { Component, useState, useEffect } from "react";
import instrumento from './instrumento';
import { Navigation } from './Navbar';
import {getInstrumentosJSONFetch} from './funcionesapi';



export const Instrumentos = () => {

    const [ins, setInstrumentos] = useState<instrumento[]>([]);
    
    const getInstrumentosResto = async () => {
      let datos:instrumento[] = await getInstrumentosJSONFetch();
      console.log(datos);
      setInstrumentos(datos);
    }
    
    useEffect(() => {
      getInstrumentosResto();
    }, []);
    
    return (
        <>
            <Navigation></Navigation>
            
            <Container >
                
                {ins.map(instrumento => (
                    <div style={{display: "flex", justifyContent:"center"}}>
                        <Tarjeta
                            key={instrumento.id}
                            id={String(instrumento.id)}
                            nombre={instrumento.instrumento}
                            imagen={instrumento.imagen}
                            precio={String(instrumento.precio)}
                            cantidadVendida={String(instrumento.cantidadVendida)}
                            costoEnvio={instrumento.costoEnvio}
                        />
                      </div>
                ))}
                
            </Container>
            <br></br>
        </>
    )
}