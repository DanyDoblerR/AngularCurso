import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReestablecerComponent } from './reestablecer/reestablecer.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';

const appRoutes: Routes =[
   {path: '', component:HomeComponent},
   {path: 'reestablecer', component:ReestablecerComponent},
   {path: 'menu', component:MenuComponent},
   {path: 'usuarios', component:UsuariosComponent},
   {path: 'perfil', component:PerfilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReestablecerComponent,
    MenuComponent,
    UsuariosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
