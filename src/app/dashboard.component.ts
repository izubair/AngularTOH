import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes/hero';
import { HeroService } from './heroes/hero.service';

@Component({    
    selector: 'my-dashboard',
    templateUrl: './app/dashboard.component.html',
    styleUrls: ['./app/dashboard.component.css'],    
})

export class DashboardComponent implements OnInit {

    heroes: Hero[]=[];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroesAsync()
            .then(heroes => this.heroes=heroes.slice(1, 5));
    }
}
