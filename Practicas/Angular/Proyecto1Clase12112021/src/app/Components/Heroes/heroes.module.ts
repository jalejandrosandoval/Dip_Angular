import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesCardComponent } from './Heroes-Card/heroes-card.component';
import { SearcherComponent } from '../Shared/searcher/searcher.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroesCardComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
