import { Component, OnInit } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre: String = `Daniel`; 
  apellido: String = `Rodríguez`;
  correo: String = `daniel.rodriguez@cascadacon.com`;
  telefono: String = `5585727674`;
  sexo: String = `Masculino`;

  nombreCambio: String = ``;
  apellidoCambio: String = ``;
  correoCambio: String = ``;
  telefonoCambio: String = ``;
  sexoCambio: String = ``;
  
  actualizar()
  {
    this.nombre = this.nombreCambio;
    this.apellido = this.apellidoCambio;
    this.correo = this.correoCambio;
    this.telefono = this.telefonoCambio;
    this.sexo = this.sexoCambio;
  }

  ngOnInit(): void{

  }
}


