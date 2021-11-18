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
  
  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

}
