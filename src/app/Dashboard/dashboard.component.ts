import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    template : `
    <div>
        <router-outlet></router-outlet>
    </div>
    `,
})
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
