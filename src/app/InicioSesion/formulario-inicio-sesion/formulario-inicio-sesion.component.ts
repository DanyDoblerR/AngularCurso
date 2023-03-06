import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-formulario-inicio-sesion',
  templateUrl: './formulario-inicio-sesion.component.html',
  styleUrls: ['.././inicio-sesion.css'],
})
export class FormularioInicioSesionComponent {

  datosUsuario !: FormGroup;
  mostrarContrasena: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.datosUsuario = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required])
    });
  }

  enviarDatos(infoUsuario: Usuario) {
    if (infoUsuario.email === '' || infoUsuario.contrasena === '') {
      alert('Favor de llenar todos los campos');
    }else{
      this.usuarioService.validarInicioSesion(infoUsuario.email, infoUsuario.contrasena)
      .subscribe( (respuesta: any) => {
        if (respuesta.message === 'Inicio sesion correcto') {
          this.router.navigate(['/dashboard']);
          localStorage.setItem('idUsuario', respuesta.id);
        } else {
          alert('Usuario o contraseña incorrecta');
        }
      });
    }
  }
  mensajeErrorCampoRequerido(controlName: string, errorName: string) {
    if (this.datosUsuario.controls[controlName].hasError('required')) {
      return `El campo ${ controlName } es requerido`;
    }
    return '';
  }

  mensajeErrorCorreoFormato(controlName: string, errorName: string) {
    if (this.datosUsuario.controls[controlName].hasError('email')) {
      return 'El correo no es válido';
    }
    return '';
  }

  registrarUsuario(){
    this.router.navigate(['/registrar-usuario']);
  }
  restablecerContrasena(){
    this.router.navigate(['/restablecer-contrasena']);
  }
}
