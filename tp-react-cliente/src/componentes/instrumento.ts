import { StringDecoder } from "string_decoder";

export default class instrumento {

    id: number = 0;
    instrumento: string = "";
    marca: string = "";
    modelo: string = "";
    imagen: string = "";
    precio: number = 0;
    costoEnvio: string = "";
    cantidadVendida: number = 0;
    descripcion: string = "";

    constructor(
        id?: number,
        instrumento?: string,
        marca?: string,
        modelo?: string,
        imagen?: string,
        precio?: number,
        costoEnvio?: string,
        cantidadVendida?: number,
        descripcion?: string){
           /* this.id = id;
            this.instrumento = instrumento;
            this.marca = marca;
            this.modelo = modelo;
            this.imagen = imagen;
            this.precio = precio;
            this.costoEnvio = costoEnvio;
            this.cantidadVendida = cantidadVendida;
            this.descripcion = descripcion */
        }
    
}

