import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Componentes de Angular Material
import { MaterialModule } from './components/Material/material.module';
// Componentes de la aplicación
import { AppComponent } from './app.component';
import { ReestablecerComponent } from './reestablecer/reestablecer.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InicioSesionModule } from './InicioSesion/inicio-sesion.module';


@NgModule({
  declarations: [
    AppComponent,    
    ReestablecerComponent,
    MenuComponent,
    UsuariosComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    InicioSesionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
