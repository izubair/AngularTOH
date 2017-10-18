import { Component }            from '@angular/core';
import { Hero }                 from './hero';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'my-heroes',
    templateUrl: './app/heroes/heroes.component.html',
    styleUrls: ['./app/heroes/heroes.component.css']  
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroesAsync().then(heroes => this.heroes=heroes);   
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/hero', this.selectedHero.id]);
    }


}
