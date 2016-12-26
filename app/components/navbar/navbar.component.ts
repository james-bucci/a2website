import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    private projectName : string;

    constructor() { 
        this.projectName = 'A2Website';
    }

    ngOnInit() { }
}