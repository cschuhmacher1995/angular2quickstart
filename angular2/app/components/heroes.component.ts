import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from 'models/hero.model';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../service/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/html/heroes.component.html',
    styleUrls: ['app/components/styles/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private _heroService: HeroService, private _router: Router) {}

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}])
    }

}
