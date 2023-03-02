import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// Componentes de Angular Material
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
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
    InicioSesionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
