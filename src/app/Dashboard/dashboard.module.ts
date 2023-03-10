import { PerfilComponent, DialogContentExampleDialog } from './perfil/perfil.component';
import { MaterialModule } from './../components/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent, DialogoModificar } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    UsuariosComponent,
    DialogContentExampleDialog,
    DialogoModificar
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],

})
export class DashboardModule { }
