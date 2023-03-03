import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Componentes de Angular Material
import { MaterialModule } from './components/Material/material.module';
// Componentes de la aplicación
import { AppComponent } from './app.component';
import { InicioSesionModule } from './InicioSesion/inicio-sesion.module';
import { DashboardModule } from './Dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    InicioSesionModule,
    DashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
