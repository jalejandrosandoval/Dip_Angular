import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHeroes } from 'src/app/Interfaces/IHeroes';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.css']
})
export class HeroesCardComponent implements OnInit {

  // Variables Initialization

  @Input() HeroeInput: IHeroes = {
    Name: '',
    Bio: '',
    Img: '',
    Aparition: '',
    House: ''
  };

  @Input() index: number | undefined = 0;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  // Method for see any Heroe by your index default.
  public seeHeroe() {
    this._router.navigate(['/heroe', this.index]);
  }

}
