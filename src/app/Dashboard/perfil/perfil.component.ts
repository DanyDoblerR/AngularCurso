import {Component, Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',

  styles: [`
        .container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: aliceblue;
        }
    `]
})
export class PerfilComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class DialogContentExampleDialog {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

}
