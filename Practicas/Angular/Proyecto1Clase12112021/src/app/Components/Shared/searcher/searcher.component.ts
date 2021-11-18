import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHeroes } from 'src/app/Interfaces/IHeroes';
import { HeroesService } from 'src/app/Services/Heroes/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  // Variables Initialization

  _Heroes: IHeroes[] = [];
  _term: string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.filterHeroes();
  }

  // Method for filter heroes by any term.
  private filterHeroes(){
    this.activatedRoute.params.subscribe(params => {
      this._term = params['term'];
      this._Heroes = this._heroesService.searchHeore(params['term']);
    })
  }

}
