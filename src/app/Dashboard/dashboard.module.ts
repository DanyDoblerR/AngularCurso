import { PerfilComponent, DialogContentExampleDialog } from './perfil/perfil.component';
import { MaterialModule } from './../components/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    DialogContentExampleDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],

})
export class DashboardModule { }
