import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioInicioSesionComponent } from './formulario-inicio-sesion/formulario-inicio-sesion.component';
import { FormularioRegistroUsuarioComponent } from './formulario-registro-usuario/formulario-registro-usuario.component';
import { FormularioRestablecerContrasenaComponent } from './formulario-restablecer-contrasena/formulario-restablecer-contrasena.component';



@NgModule({
  declarations: [
    FormularioInicioSesionComponent,
    FormularioRegistroUsuarioComponent,
    FormularioRestablecerContrasenaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioSesionModule { }
