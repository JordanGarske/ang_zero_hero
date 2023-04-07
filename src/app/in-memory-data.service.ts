import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', attack: 5 },
      { id: 13, name: 'Bombasto',attack: 5  },
      { id: 14, name: 'Celeritas' ,attack: 5 },
      { id: 15, name: 'Magneta' ,attack: 5 },
      { id: 16, name: 'RubberMan' ,attack: 5 },
      { id: 17, name: 'Dynama' ,attack: 5 },
      { id: 18, name: 'Dr. IQ' ,attack: 5 },
      { id: 19, name: 'Magma' ,attack: 5 },
      { id: 20, name: 'Tornado',attack: 5  }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}