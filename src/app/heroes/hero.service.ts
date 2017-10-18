import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {
    // this function works although Visual Studio red underlines the Promise
    getHeroesAsync():Promise<Hero[]> {
        return Promise.resolve(HEROES);               
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroesAsync()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

}