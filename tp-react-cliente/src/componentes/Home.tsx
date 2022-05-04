import { Container, Button } from 'react-bootstrap'
import { Navigation } from './Navbar';
import { DondeEstamos } from './DondeEstamos';
import '../home.css';

export const Home = () => {

    return (
        <>
            <Navigation></Navigation>

            <body >

                <div className="showcase">
                    <img src={require(`../assets/images/imageneshome.jpg`)} alt="instrumentos" className="bg-image" />
                    <h2 className='bg-img-title'> <b>Quienes Somos</b></h2>
                    <div className="showcase-box">
                        <p style={{ textAlign: "justify" }}><b>Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
                            conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</b>
                        </p>
                    </div>
                    <Button className='bg-img-verproductos' href='/instrumentos'><h3 style={{ textAlign: "center" }}><b><i>Nuestros Productos</i></b></h3></Button>
                   <div id='ubicacion'> <DondeEstamos></DondeEstamos></div>
                </div><br></br>

            </body>

        </>
    )
}
