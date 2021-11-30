import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroes } from 'src/app/Interfaces/IHeroes';
import { HeroesService } from 'src/app/Services/Heroes/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  // Variables Initialization
  
  Heroe: IHeroes = {
    Name: '',
    Bio: '',
    Img: '',
    Aparition: '',
    House: ''
  };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {
    this._activatedRoute.params.subscribe(
      _params => {
        this.Heroe = this._heroesService.getHeroeByIndex(_params["index"]);
      }
    );
  }

  ngOnInit(): void {
  }

}
