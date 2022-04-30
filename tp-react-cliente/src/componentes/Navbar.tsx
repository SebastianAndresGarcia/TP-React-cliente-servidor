import React from "react"
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"

export const Navigation = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/instrumentos">Nuestros Productos</Nav.Link>
                    <Nav.Link href="/Donde Estamos">Donde Estamos</Nav.Link>
                </Nav>
                
            </Navbar>
        </>
    )
}