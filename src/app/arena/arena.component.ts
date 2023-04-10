import { Component,    Output,EventEmitter   } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent {
  heroOne: Hero = {id: -1, name: '', attack: 0};
  heroTwo: Hero = { id: -1, name: '', attack: 0 };
  looser:Hero = { id: -1, name: '', attack: 0 }; 
  display:string = "enter you fighter"
  @Output() nameEmitter = new EventEmitter < Hero > ();  

  constructor(private heroService: HeroService) { }
  postData() {  
        this.nameEmitter.emit(this.looser);  
    } 
  fight(): void{
    const  one_attack = ( Math.random() * this.heroOne.attack );
    const two_attack = ( Math.random() * this.heroTwo.attack );
    if (one_attack > two_attack){
      this.heroService.deleteHero(this.heroTwo.id).subscribe();
      this.looser = this.heroTwo;
      this.heroTwo.attack = -1;
    }
    else{
      this.heroService.deleteHero(this.heroTwo.id).subscribe();
      this.looser = this.heroOne;
      this.heroOne.attack = -1;
    }
    this.postData()
  }
  searchForHeroOne( id: string): void{
     if (this.different_hero(Number(id))) {
       this.heroService.getHero(Number(id)).subscribe(h =>{
         if (h != undefined)
         {
            this.heroOne = h; 
              this.display = " valid number for hero one" 

         }
        else{
              this.display = "not valid number for hero one" 
            }
        }
          )
      }


  }
  searchForHeroTwo( id: string): void{
    if (this.different_hero(Number(id))) {
      this.heroService.getHero(Number(id)).subscribe(h => {
       if (h != undefined) {
        this.heroTwo = h;
        this.display = " valid number for hero one"

      }
      else {
        this.display = "not valid number for hero one"
      }
      }
         )
    }

}
  private different_hero(id:number): boolean {
    if(this.heroOne.id == id  || this.heroTwo.id == id   ){
      return false
    }
    return true
  }
}
