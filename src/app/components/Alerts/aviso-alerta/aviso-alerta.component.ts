import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-aviso-alerta',
  templateUrl: './aviso-alerta.component.html',
  styles: [
  ]
})
export class AvisoAlertaComponent {
  message: string = '';

  constructor(
    private dialogRef: MatDialogRef<AvisoAlertaComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string }
  ) {
    this.message = data ? data.message : '';
  }

  closeAlert() {
    this.dialogRef.close();
  }
}
