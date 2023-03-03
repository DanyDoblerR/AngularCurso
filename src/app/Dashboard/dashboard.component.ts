import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    template : `
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `
    ,
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
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
