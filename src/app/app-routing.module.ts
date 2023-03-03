import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioInicioSesionComponent } from './InicioSesion/formulario-inicio-sesion/formulario-inicio-sesion.component';
import { FormularioRegistroUsuarioComponent } from './InicioSesion/formulario-registro-usuario/formulario-registro-usuario.component';
import { FormularioRestablecerContrasenaComponent } from './InicioSesion/formulario-restablecer-contrasena/formulario-restablecer-contrasena.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { PerfilComponent } from './Dashboard/perfil/perfil.component';
import { UsuariosComponent } from './Dashboard/usuarios/usuarios.component';

// Colocar los componentes en cada parte y si marca error eliminar los que no se van a ocupar

const rutas: Routes = [
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
  {path: 'inicio-sesion', component: FormularioInicioSesionComponent},
  {path:'registrar-usuario', component: FormularioRegistroUsuarioComponent},
  {path: 'restablecer-contrasena', component: FormularioRestablecerContrasenaComponent},
  {path: 'dashboard', component: DashboardComponent,
      children: [
          { path: '', redirectTo: 'perfil', pathMatch: 'full'},
          { path: 'perfil', component: PerfilComponent },
          { path: 'usuarios', component: UsuariosComponent },
        ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
