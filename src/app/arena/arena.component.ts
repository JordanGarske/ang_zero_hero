import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent {
  heroOne: Hero = {id: -1, name: '', attack: 0};
  heroTwo: Hero = {id: -1, name: '', attack: 0};;
  constructor(private heroService: HeroService) { }
  fight(): void{
    const  one_attack = ( Math.random() * this.heroOne.attack );
    const two_attack = ( Math.random() * this.heroTwo.attack );
    if (one_attack > two_attack){
      this.heroService.deleteHero(this.heroTwo.id).subscribe();
      this.heroTwo.attack = -1;
    }
    else{
      this.heroService.deleteHero(this.heroTwo.id).subscribe();
      this.heroOne.attack = -1;
    }
  }
  search( id: string, hero: Hero): void{
       this.heroService.getHero(Number(id)).subscribe(h => hero =  h )
  }

}
