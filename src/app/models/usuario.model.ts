
export class Usuario {

    id: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    telefono: number;
    calle: string;
    numero: number;
    colonia: string;
    estado: string;
    cp: number;
    gender: string;
    contrasena: string;
    imagenPerfil: any;

    constructor() {
        this.id = '';
        this.nombres = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.email = '';
        this.contrasena = '';
        this.gender = '';
        this.telefono = 0;
        this.calle = '';
        this.numero = 0;
        this.colonia = '';
        this.estado = '';
        this.cp = 0;
        this.imagenPerfil = null;
    }
}
