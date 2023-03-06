import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['usuarios.component.css']
})
export class UsuariosComponent {
  
  dataSource !: Usuario[];
  displayedColumns = ['nombres','apellidoPaterno','apellidoMaterno', 'correo', 'telefono', 'sexo', 'contraseña', 'botones'];

  constructor(private usuariosService : UsuarioService){
    this.obtenerUsuarios(localStorage.getItem('idUsuario') as string)
  }

  refresh(): void { 
    window.location.reload();
  }

  obtenerUsuarios (id:string){
    this.usuariosService.obtenerusuarios(id)
    .subscribe (
      (datos)=>{
        console.log(datos); 
        this.dataSource = datos;
      }
    )
  }

  eliminarUsuarios (id:string){
   this.usuariosService.eliminarusuarios(id)
   .subscribe(
    (datos)=>{
      this.dataSource =datos;
    }
   )
  }
}
