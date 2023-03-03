import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './Material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AvisoConfirmacionComponent } from './Alerts/aviso-confirmacion/aviso-confirmacion.component';
import { AvisoAlertaComponent } from './Alerts/aviso-alerta/aviso-alerta.component';

@NgModule({
    declarations: [
        NavbarComponent,
        AvisoConfirmacionComponent,
        AvisoAlertaComponent
    ],
    imports: [ CommonModule, MaterialModule ],
    exports: [ NavbarComponent ],
    providers: [],
})
export class ComponentsModule {}