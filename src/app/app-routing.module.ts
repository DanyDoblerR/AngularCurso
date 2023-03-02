import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioInicioSesionComponent } from './InicioSesion/formulario-inicio-sesion/formulario-inicio-sesion.component';
import { FormularioRegistroUsuarioComponent } from './InicioSesion/formulario-registro-usuario/formulario-registro-usuario.component';
import { FormularioRestablecerContrasenaComponent } from './InicioSesion/formulario-restablecer-contrasena/formulario-restablecer-contrasena.component';

// Colocar los componentes en cada parte y si marca error eliminar los que no se van a ocupar

const rutas: Routes = [
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
  {path: 'inicio-sesion', component: FormularioInicioSesionComponent},
  {path:'registrar-usuario', component: FormularioRegistroUsuarioComponent},
  {path: 'restablecer-contrasena', component: FormularioRestablecerContrasenaComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
