import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-formulario-registro-usuario',
  templateUrl: './formulario-registro-usuario.component.html',
  styleUrls: ['.././inicio-sesion.css'],
})
export class FormularioRegistroUsuarioComponent {

  
  datosUsuario : FormGroup  = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidoPaterno: new FormControl('', [Validators.required]),
    apellidoMaterno: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    domicilios: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required]),
    });

  mostrarContrasena: boolean = true;
  removableInput: boolean = false;

  datosUsuarioStep1 : FormGroup = this.formBuilder.group({
    nombres: new FormControl('', [Validators.required]),
    apellidoPaterno: new FormControl('', [Validators.required]),
    apellidoMaterno: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
  });
  datosUsuarioStep2 : FormGroup = this.formBuilder.group({
    telefono: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    domicilios : new FormArray([this.nuevoDomicilio()]),
  });
  datosUsuarioStep3 : FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
  }

  unificarDatosFormularios() {
    this.datosUsuario.controls['nombres'].setValue(this.datosUsuarioStep1.controls['nombres'].value);
    this.datosUsuario.controls['apellidoPaterno'].setValue(this.datosUsuarioStep1.controls['apellidoPaterno'].value);
    this.datosUsuario.controls['apellidoMaterno'].setValue(this.datosUsuarioStep1.controls['apellidoMaterno'].value);
    this.datosUsuario.controls['sexo'].setValue(this.datosUsuarioStep1.controls['sexo'].value);
    this.datosUsuario.controls['telefono'].setValue(this.datosUsuarioStep2.controls['telefono'].value);
    this.datosUsuario.controls['domicilios'].setValue(this.datosUsuarioStep2.controls['domicilios'].value.map((domicilio: any) => domicilio.domicilio));
    this.datosUsuario.controls['email'].setValue(this.datosUsuarioStep3.controls['email'].value);
    this.datosUsuario.controls['contrasena'].setValue(this.datosUsuarioStep3.controls['contrasena'].value);
    this.registrarUsuario(this.datosUsuario.value);    
  }

  registrarUsuario(infoUsuario: Usuario) {
    console.log(infoUsuario);
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
  
  //* Funciones para el manejo de domicilios
  obtenerDomicilios() {
    return (this.datosUsuarioStep2.get('domicilios') as FormArray).controls;
  }

  nuevoDomicilio(): FormGroup {    
    return this.formBuilder.group({
      domicilio: new FormControl('', [Validators.required]),      
    });
  }

  agregarDomicilio() {
    const domicilios = this.datosUsuarioStep2.controls['domicilios'] as FormArray;
    domicilios.push(this.nuevoDomicilio());    
  }

  eliminarDomicilio(index: number) {
    if (index < 0 || index > this.obtenerDomicilios().length - 1){
      return;
    }
      
    const domicilios = this.datosUsuarioStep2.controls['domicilios'] as FormArray;
    domicilios.removeAt(index);
  }



  //* Funciones para el manejo de rutas

  regresarInicio() {
    this.router.navigate(['/registrar-usuario']);
  }

  //* Funciones para el manejo de errores

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
        case 'sexo':
          return 'El campo genero es requerido';
        case 'contrasena':
          return 'El campo contraseña es requerido';
        case 'domicilios':
          return 'El campo domicilio es requerido';
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


}
