import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-hero-found',
  templateUrl: './hero-found.component.html',
  styles: [
  ]
})
export class HeroFoundComponent implements OnInit {

  heroes: any[] = [];
  term: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {  }

  /**
   * @activatedRoute 'listen' the new route given for the hero-found.component
   * the term passed (the hero name) is used for look for heroes in the service.
   */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.heroes = this.heroesService.searchHeroes(params['term']);// Get the array of Heroes
      console.log(this.heroes);
    });
  }

}
