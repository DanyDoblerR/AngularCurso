import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-registro-usuario',
  templateUrl: './formulario-registro-usuario.component.html',
  styleUrls: ['.././inicio-sesion.css'],
})
export class FormularioRegistroUsuarioComponent {

  datosUsuario !: FormGroup;
  mostrarContrasena: boolean = true;
  removableInput: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.datosUsuario = this.formBuilder.group({
      nombres: new FormControl('', [Validators.required]),
      apellidoPaterno: new FormControl('', [Validators.required]),
      apellidoMaterno: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      gender: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      imagen: new FormControl('')
    });
  }

  registrarUsuario(infoUsuario: Usuario) {
    if (this.datosUsuario.invalid) {
      alert('Favor de llenar todos los campos');
    } else {
      this.usuarioService.registrarUsuario(infoUsuario).subscribe(
        (data) => {          
          switch (data.message) {
            case 'Registro de usuario correcto':
              alert(data.message);
              this.router.navigate(['/inicio-sesion']);
              break;
            case 'Usuario ya existe':
              alert(data.message);
              this.datosUsuario.controls['email'].setErrors({ 'duplicate': true });
              break;
            default:
              alert(data.message);
              break;
          }
        }        
      );
    }
  }
  mensajeErrorCampoRequerido(controlName: string, errorName: string) {

    if (this.datosUsuario.controls[controlName].hasError('required')) {
      switch (controlName) {
        case 'nombres':
          return 'El campo nombres es requerido';
        case 'apellidoPaterno':
          return 'El campo apellido paterno es requerido';
        case 'apellidoMaterno':
          return 'El campo apellido materno es requerido';
        case 'email':
          return 'El campo correo es requerido';
        case 'telefono':
          return 'El campo telefono es requerido';
        case 'gender':
          return 'El campo genero es requerido';
        case 'contrasena':
          return 'El campo contraseña es requerido';
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
  mesajeErrorCorreoDuplicado(controlName: string, errorName: string) {
    if (this.datosUsuario.controls[controlName].hasError('duplicate')) {
      return 'El correo ya existe';
    }
    return '';
  }

  mensajeErrorNumero(controlName: string, errorName: string) {
    if (this.datosUsuario.controls[controlName].hasError('pattern')) {
      return 'El campo solo acepta números';
    }
    return '';
  }

  cargarImagen(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    this.datosUsuario.patchValue({
      imagen: file
    });
    this.datosUsuario.get('imagen')!.updateValueAndValidity();
  }

  regresarInicio() {
    this.router.navigate(['/registrar-usuario']);
  }

}
