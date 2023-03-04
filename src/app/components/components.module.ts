import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
    imports: [CommonModule, MaterialModule],
    exports: [NavbarComponent],
    providers: [],
})
export class ComponentsModule {
    title = 'matDialog';
    dataFromDialog: any;

    constructor(private dialog: MatDialog) { }

    alertDialog() {
        const dialogRef = this.dialog.open(AvisoAlertaComponent, {
            data: {
                message: 'Hello World from Edupala',
            },
        });
    }

    confirmDialog() {
        const ref: MatDialogRef<AvisoConfirmacionComponent> = this.dialog.open(
            AvisoAlertaComponent,
            {
                width: '600px',
                height: '210px',
                data: {
                    message: 'Are you sure to cancel without saving the data?',
                },
                backdropClass: 'confirmDialogComponent',
                hasBackdrop: true,
            }
        );
    }
}