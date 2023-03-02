import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Colocar los componentes en cada parte y si marca error eliminar los que no se van a ocupar

const rutas: Routes = [
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
  {path: 'inicio-sesion', component: ''},
  {path:'registrar-usuario', component: ''},
  {path: 'restablecer-contrasena', component: ''},
  {path: 'panel-control', component: '',
    children: [
      {path: '', redirectTo: 'mostrar-usuarios', pathMatch: 'full'},
      {path: 'mostrar-usuarios', component: ''},
      {path: 'informacion-usuario', component: ''},
      {path: 'editar-usuario', component: ''},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
