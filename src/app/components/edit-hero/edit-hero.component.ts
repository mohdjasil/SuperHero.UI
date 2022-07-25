import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  constructor(private apiService: SuperHeroService) { }

  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  ngOnInit(): void {
  }

  updateHero(hero: SuperHero) {
    this.apiService.updateSuperHero(hero).subscribe(res => {
      this.heroesUpdated.emit(res);
    });
  }

  deleteHero(hero: SuperHero) {
    this.apiService.deleteSuperHero(hero).subscribe(res => {
      this.heroesUpdated.emit(res);
    });
  }

  createHero(hero: SuperHero) {
    this.apiService.createSuperHero(hero).subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

}
