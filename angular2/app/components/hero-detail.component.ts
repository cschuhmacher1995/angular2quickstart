import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '../models/hero.model';
import {HeroService} from '../service/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/html/hero-detail.component.html',
    stylesUrls: ['app/components/styles/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    constructor(private _heroService: HeroService, private _routeParams: RouteParams) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }

    @Input()
    hero: Hero;
}