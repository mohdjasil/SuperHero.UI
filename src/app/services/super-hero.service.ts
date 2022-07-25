import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor(private http: HttpClient) { }

  private url = "SuperHero";

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.baseApiUrl}/${this.url}`);
  }

  public createSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(`${environment.baseApiUrl}/${this.url}`, hero);
  }

  public updateSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(`${environment.baseApiUrl}/${this.url}`, hero);
  }

  public deleteSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(`${environment.baseApiUrl}/${this.url}/${hero.id}`);
  }
}
