import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent implements OnInit {
    private jumboHeader: string;
    private jumboText: string;
    private jumboButtonText: string;
    private jumboButtonLink: string;

    constructor() { 
        this.jumboHeader = "This is Great"
        this.jumboText = "This is the greatest jumbotron in the world"
        this.jumboButtonText = "Learn More"
        this.jumboButtonLink = "http://www.webflow.com"
    }

    ngOnInit() { }
}