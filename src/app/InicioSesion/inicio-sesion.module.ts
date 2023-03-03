import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Material
import { MaterialModule } from '../components/Material/material.module';
//Componentes de inicio de sesión
import { FormularioInicioSesionComponent } from './formulario-inicio-sesion/formulario-inicio-sesion.component';
import { FormularioRegistroUsuarioComponent } from './formulario-registro-usuario/formulario-registro-usuario.component';
import { FormularioRestablecerContrasenaComponent } from './formulario-restablecer-contrasena/formulario-restablecer-contrasena.component';

@NgModule({
  declarations: [
    FormularioInicioSesionComponent,
    FormularioRegistroUsuarioComponent,
    FormularioRestablecerContrasenaComponent
  ],
  exports: [
    FormularioInicioSesionComponent,
    FormularioRegistroUsuarioComponent,
    FormularioRestablecerContrasenaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class InicioSesionModule { }
