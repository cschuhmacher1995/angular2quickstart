import {Injectable} from 'angular2/core';
import {HEROES} from '../mockdata/mock-heroes';
import {Hero} from '../models/hero.model';

@Injectable()
export class HeroService {

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowely() {
        return new Promise<Hero[]> (resolve =>
            setTimeout(() => resolve(HEROES), 2000));
    }

    getHero(id: number) {
        console.log(id);
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
}