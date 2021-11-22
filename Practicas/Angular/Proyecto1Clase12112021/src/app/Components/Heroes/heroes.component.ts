import { Component, OnInit } from '@angular/core';
import { IHeroes } from 'src/app/Interfaces/IHeroes';
import { HeroesService } from 'src/app/Services/Heroes/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Variables Initialization
  
  heroes: IHeroes[] = [];
  
  _heroeNew: IHeroes = {
      Name: "Aquaman",
      Bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      Img: "assets/img/aquaman.png",
      Aparition: "1941-11-01",
      House: "DC"
    };

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this._heroesService.getHeroes().subscribe(
      _heroes =>{
        this.heroes = _heroes;
      }
    );
  }

  public addHeroe(){
    this._heroesService.addHeroe(this._heroeNew);
  }

  // public ngOnDestroy(): void{
  //   this._heroesService._Heroes$.unsubscribe();
  // }

}
