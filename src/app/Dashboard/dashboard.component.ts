import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',

    template : `
<<<<<<< HEAD
    <div>

    template : ` 
    <div>
        <app-navbar></app-navbar>

=======
    <div class="container">
>>>>>>> parent of 0a03594 (añadi funcionalidades)
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
