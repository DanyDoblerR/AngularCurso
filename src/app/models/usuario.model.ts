
export class Usuario {
    
    id: string;    
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correo: string;    
    telefono: number;    
    gender: string;
    contrasena: string;
    imagenPerfil: any;   
    
    constructor() {
        this.id = '';
        this.nombres = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.correo = '';
        this.contrasena = '';        
        this.gender = '';
        this.telefono = 0; 
        this.imagenPerfil = null;       
    }
}