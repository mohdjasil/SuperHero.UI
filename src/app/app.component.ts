import { Component, OnInit } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private superHeroService: SuperHeroService){}

  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((res: SuperHero[]) => (this.heroes = res));
  }

  updatedHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }

  newHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService.deleteSuperHero(hero).subscribe((heroes: SuperHero[]) => this.updatedHeroList(heroes));
  }
}
