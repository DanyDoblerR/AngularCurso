import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-formulario-restablecer-contrasena',
  templateUrl: './formulario-restablecer-contrasena.component.html',
  styleUrls: ['.././inicio-sesion.css'],
})
export class FormularioRestablecerContrasenaComponent {
  datosUsuario !: FormGroup;
  mostrarCamposContrasena: boolean = false;
  mostrarContrasena: boolean = true;
  mostrarContrasenaVerifica: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.datosUsuario = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required]),
      verificacionContrasena: new FormControl('', [Validators.required])
    });
  }

  validarCorreo(infoUsuario: Usuario) {
    if (this.datosUsuario.controls['correo'].value === '') {
      alert('Favor de llenar todos los campos');
    } else {
      this.usuarioService.validarCorreo(infoUsuario.email)
        .subscribe((data) => {
          if (data.message === 'Usuario no encontrado') {
            alert(data.message);
          } else if (data.message === 'Usuaro encontrado') {
            alert(data.message);
            localStorage.setItem('idUsuario', data.id.toString());
            this.mostrarCamposContrasena = true;
          }
        });
    }
  }
  cambiarContrasena(infoUsuario: Usuario) {
    if (this.datosUsuario.controls['contrasena'].value === '' || this.datosUsuario.controls['verificacionContrasena'].value === '') {
      alert('Favor de llenar todos los campos');
    } else {
      if (this.datosUsuario.controls['contrasena'].value !== this.datosUsuario.controls['verificacionContrasena'].value) {
        this.datosUsuario.controls['contrasena'].setErrors({ 'notSame': true });
      } else {
        let id = localStorage.getItem('idUsuario') as string;
        this.usuarioService.actualizarContrasena(id,infoUsuario.contrasena)
        .subscribe((data) => {
          if (data.message === 'Contraseña actualizada') {
            alert('Cambio de contraseña correcto');
            localStorage.removeItem('idUsuario');
            this.router.navigate(['/inicio-sesion']);
          }else{
            alert('Algo salio mal' + data.message);
          }
          });
      }
    }
  }


  mensajeErrorCampoRequerido(controlName: string, errorName: string) {
    if (this.datosUsuario.controls[controlName].hasError('required')) {
      switch (controlName) {
        case 'correo':
          return 'Favor de ingresar un correo';
        case 'contrasena':
          return 'Favor de ingresar una contraseña';
        case 'verificacionContrasena':
          return 'Favor de ingresar una contraseña';
        default:
          return '';
      }
    }
    return '';
  }
  mensajeErrorCorreoFormato(controlName: string, errorName: string) {
    if (this.datosUsuario.controls[controlName].hasError('email')) {
      return 'El correo no es válido';
    }
    return '';
  }

  mensajeErrorNoCoincide(controlName: string, errorName: string) {
    if (this.datosUsuario.controls[controlName].hasError('notSame')) {
      return 'Las contraseñas no coinciden';
    }
    return '';
  }

  registrarUsuario() {
    this.router.navigate(['/registrar-usuario']);
  }
  restablecerContrasena() {
    this.router.navigate(['/restablecer-contrasena']);
  }
}
