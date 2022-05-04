import React from "react"
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"

export const Navigation = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/instrumentos">Nuestros Productos</Nav.Link>
                    <Nav.Link href="/home/#ubicacion">Donde Estamos</Nav.Link>
                    <Nav.Link href="/TablaInstrumentos">ABM Instrumento</Nav.Link>
                </Nav>
                
            </Navbar>
        </>
    )
}