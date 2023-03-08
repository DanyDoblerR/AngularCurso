import { Component, Inject } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['usuarios.component.css']
})
export class UsuariosComponent {
  
  dataSource !: Usuario[];
  displayedColumns = ['nombres','apellidoPaterno','apellidoMaterno', 'correo', 'telefono', 'sexo', 'calle', 'numero', 'colonia', 'estado', 'cp', 'contraseña', 'botones'];




  constructor(private usuariosService : UsuarioService, private dialog: MatDialog){
    this.obtenerUsuarios(localStorage.getItem('idUsuario') as string)
  }

  refresh(): void { 
    window.location.reload();
  }

  obtenerUsuarios (id:string){
    this.usuariosService.obtenerusuarios(id)
    .subscribe (
      (datos)=>{
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

 /* modificarUsuario(): void {
    const dialogRef = this.dialog.open(PerfilComponent, {
      width: '600px',
      height: '700px',
    }); 
   } */

   openDialog(iduser: string) {
    console.log(iduser)
    
    const dialogRef = this.dialog.open(DialogoModificar, {data: {id: iduser}});
    
    
    dialogRef.afterClosed().subscribe(result => {this.refresh()
    });
  }

}

@Component({
   selector: 'app-dialogoModal',
   templateUrl: './dialogoModal.component.html',
})

export class DialogoModificar{
  id: string = this.data.id ;
  perfil: Usuario = new Usuario();
  datosUsuario: FormGroup =this.contructorForm.group({
    nombres: new FormControl(''),
    apellidoPaterno: new FormControl(''),
    apellidoMaterno: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    calle: new FormControl (''),
    numero: new FormControl (''),
    colonia: new FormControl (''),
    estado: new FormControl (''),
    cp: new FormControl (''),
    gender: new FormControl(''),
    contrasena: new FormControl(''),
  });

  camposEditar = true;
  mostrarContrasena = true;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private _formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private contructorForm : FormBuilder) {
    console.log (data.id)
      this.usuarioService.obtenerUsuarioModificar(this.id)
      .subscribe((data:Usuario) => {
        console.log(usuarioService)
        this.perfil = data;
        this.datosUsuario.controls['nombres'].setValue(data.nombres);
        this.datosUsuario.controls['apellidoPaterno'].setValue(data.apellidoPaterno);
        this.datosUsuario.controls['apellidoMaterno'].setValue(data.apellidoMaterno);
        this.datosUsuario.controls['email'].setValue(data.email);
        this.datosUsuario.controls['telefono'].setValue(data.telefono);
        this.datosUsuario.controls['calle'].setValue(data.calle);
        this.datosUsuario.controls['numero'].setValue(data.numero);
        this.datosUsuario.controls['colonia'].setValue(data.colonia);
        this.datosUsuario.controls['estado'].setValue(data.estado);
        this.datosUsuario.controls['cp'].setValue(data.cp);
        this.datosUsuario.controls['gender'].setValue(data.gender);
        this.datosUsuario.controls['contrasena'].setValue(data.contrasena);
      });
    }

    activarFormEditar() {
      this.camposEditar = !this.camposEditar;
      if (this.camposEditar) {
        this.datosUsuario.controls['nombres'].disable();
        this.datosUsuario.controls['apellidoPaterno'].disable();
        this.datosUsuario.controls['apellidoMaterno'].disable();
        this.datosUsuario.controls['email'].disable();
        this.datosUsuario.controls['telefono'].disable();
        this.datosUsuario.controls['calle'].disable();
        this.datosUsuario.controls['numero'].disable();
        this.datosUsuario.controls['colonia'].disable();
        this.datosUsuario.controls['estado'].disable();
        this.datosUsuario.controls['cp'].disable();
        this.datosUsuario.controls['gender'].disable();
        this.datosUsuario.controls['contrasena'].disable();
      } else {
        this.datosUsuario.controls['nombres'].enable();
        this.datosUsuario.controls['apellidoPaterno'].enable();
        this.datosUsuario.controls['apellidoMaterno'].enable();
        this.datosUsuario.controls['email'].enable();
        this.datosUsuario.controls['telefono'].enable();
        this.datosUsuario.controls['calle'].enable();
        this.datosUsuario.controls['numero'].enable();
        this.datosUsuario.controls['colonia'].enable();
        this.datosUsuario.controls['estado'].enable();
        this.datosUsuario.controls['cp'].enable();
        this.datosUsuario.controls['gender'].enable();
        this.datosUsuario.controls['contrasena'].enable();
      }
    }
    actualizarUSuario(from:Usuario){
      console.log(from)
      this.usuarioService.actualizarUsuario(this.id,from).subscribe(data=>
        console.log(data))
    }
}
