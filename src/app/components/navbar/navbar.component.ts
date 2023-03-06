import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .navbar {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #3f51b5;
            flex-direction: column;
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

}
