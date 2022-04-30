import { Container } from 'react-bootstrap'
import { Navigation } from './Navbar';
import { DondeEstamos } from './DondeEstamos';
import '../index.css';
export const Home = () => {

    return (
        <>
            <Navigation></Navigation>
            <body className="containerhome">
                <Container>
                <div className="body-justify-content-md-center  border" style={{ width: "70%" }}>
                    <h4 style={{ textAlign: "left" }}>Quienes Somos</h4>

                    <p style={{ textAlign: "justify" }}>  Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
                        conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.
                    </p>
                    <a href='/instrumentos'><h4 style={{ textAlign: "left" }}><b><i>Nuestros Productos</i></b></h4></a>
                    <DondeEstamos></DondeEstamos>
                </div><br></br>
                </Container>
            </body>
        </>
    )
}