import { Usuario } from './../../models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent {

  id: string = localStorage.getItem('idUsuario') as string;
  perfil: Usuario = new Usuario();
  datosUsuario: FormGroup =this.contructorForm.group({
    nombres: new FormControl(''),
    apellidoPaterno: new FormControl(''),
    apellidoMaterno: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    gender: new FormControl(''),
    contrasena: new FormControl(''),
  });
  camposEditar = true;
  mostrarContrasena = true;
  constructor(
    public dialog: MatDialog,
    private usuarioService: UsuarioService,
    private router: Router,
    private contructorForm : FormBuilder) {

      this.usuarioService.obtenerUsuario(this.id)
      .subscribe((data:Usuario) => {
        this.perfil = data;
        this.datosUsuario.controls['nombres'].setValue(data.nombres);
        this.datosUsuario.controls['apellidoPaterno'].setValue(data.apellidoPaterno);
        this.datosUsuario.controls['apellidoMaterno'].setValue(data.apellidoMaterno);
        this.datosUsuario.controls['email'].setValue(data.email);
        this.datosUsuario.controls['telefono'].setValue(data.telefono);
        this.datosUsuario.controls['gender'].setValue(data.sexo);
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
        this.datosUsuario.controls['sexo'].disable();
        this.datosUsuario.controls['contrasena'].disable();
      } else {
        this.datosUsuario.controls['nombres'].enable();
        this.datosUsuario.controls['apellidoPaterno'].enable();
        this.datosUsuario.controls['apellidoMaterno'].enable();
        this.datosUsuario.controls['email'].enable();
        this.datosUsuario.controls['telefono'].enable();
        this.datosUsuario.controls['sexo'].enable();
        this.datosUsuario.controls['contrasena'].enable();
      }
    }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class DialogContentExampleDialog {

  id: string = localStorage.getItem('idUsuario') as string;
  perfil: Usuario = new Usuario();
  datosUsuario: FormGroup =this.contructorForm.group({
    nombres: new FormControl(''),
    apellidoPaterno: new FormControl(''),
    apellidoMaterno: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    sexo: new FormControl(''),
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
  isEditable = false;

  constructor(
    private _formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private contructorForm : FormBuilder) {

      this.usuarioService.obtenerUsuario(this.id)
      .subscribe((data:Usuario) => {
        console.log(usuarioService)
        this.perfil = data;
        this.datosUsuario.controls['nombres'].setValue(data.nombres);
        this.datosUsuario.controls['apellidoPaterno'].setValue(data.apellidoPaterno);
        this.datosUsuario.controls['apellidoMaterno'].setValue(data.apellidoMaterno);
        this.datosUsuario.controls['email'].setValue(data.email);
        this.datosUsuario.controls['telefono'].setValue(data.telefono);
        this.datosUsuario.controls['gender'].setValue(data.sexo);
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
        this.datosUsuario.controls['gender'].disable();
        this.datosUsuario.controls['contrasena'].disable();
      } else {
        this.datosUsuario.controls['nombres'].enable();
        this.datosUsuario.controls['apellidoPaterno'].enable();
        this.datosUsuario.controls['apellidoMaterno'].enable();
        this.datosUsuario.controls['email'].enable();
        this.datosUsuario.controls['telefono'].enable();
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
