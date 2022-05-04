import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"



type params = { id: string, nombre: string, imagen: string, precio: string, cantidadVendida: string, costoEnvio: string }

export function Tarjeta(args: params) {
    let imagen=args.imagen.includes('http') ? args.imagen : ""
    console.log("imagen de tarjeta: "+imagen)
    return (
        
        <Row className="justify-content-md-center mt-5 border" style={{ width: "50%" }}>

            <Col sm={5}>
                <br /><h6 >{args.cantidadVendida} vendidos</h6>
                {args.imagen.includes('http') ?
                    <a href={`./Detalleinstrumento/${args.id}`}>   <img style={{ width: "160px" }} src={(imagen)} alt={args.nombre} />
                </a> :
               <a href={`./Detalleinstrumento/${args.id}`}>   <img src={require(`../assets/images/${args.imagen}`)} alt={args.nombre} />
               </a> }
                <br /><br /></Col>
            <Col sm={5}>
                <br /> <h5 >{args.nombre}</h5>
                <h4>$ {args.precio}</h4>
                {args.costoEnvio === 'G'
                    ? <h6 ><img src={require(`../assets/images/camion.png`)} alt='camion' />Envío gratis a todo el país</h6>
                    : <p ><img src={require(`../assets/images/camion.png`)} alt='camion' />Costo de envío: ${args.costoEnvio}</p>
                }

            </Col>

        </Row>
    
    )
}