import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _heroesService: HeroesService,
    private _router: Router) { }

  ngOnInit(): void {
    this._heroesService.getHeroes().subscribe(
      _heroes =>{
        this.heroes = _heroes;
      }
    );
  }

  public addHeroe(){
    console.log("formsheroecreate");
    this._router.navigate(['/formsheroecreate']);
  }

  // public ngOnDestroy(): void{
  //   this._heroesService._Heroes$.unsubscribe();
  // }

}
