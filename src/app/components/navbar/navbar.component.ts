import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;    
            background-color: #3f51b5;
            flex-direction: row;
            gap: 2px;
            height: 7rem;
            color: white;
      }
      .navbar h1 {
        font-size: 2rem;
        font-weight: 700;
        color: white;
      }
    `
  ]
})
export class NavbarComponent {

  constructor(private router: Router){}

  cerrarSesion(){
    let result = confirm("¿Deseas cerrar sesion?");
    if (result) {
      localStorage.clear();
      this.router.navigate(['/inicio-sesion']);
    }
  }

  usuarios(){
    this.router.navigate(['/dashboard/usuarios']);
  }

  perfil(){
    this.router.navigate(['/dashboard/perfil']);
  }
}
