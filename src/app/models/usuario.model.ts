
export class Usuario {

    id: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    telefono: number;
    sexo: number;
    contrasena: string;    
    domicilios: string[];

    constructor() {
        this.id = '';
        this.nombres = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.email = '';
        this.contrasena = '';
        this.sexo = 0;
        this.telefono = 0;     
        this.domicilios = [];   
    }
}
