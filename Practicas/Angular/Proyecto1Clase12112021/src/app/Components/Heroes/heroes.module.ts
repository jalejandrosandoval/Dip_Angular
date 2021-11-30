import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroesCardComponent } from './Heroes-Card/heroes-card.component';
import { SearcherComponent } from '../Shared/searcher/searcher.component';
import { FormHeroesCreateComponent } from './form-heroes-create/form-heroes-create.component';
import { FormHeroesEditComponent } from './form-heroes-edit/form-heroes-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroesCardComponent,
    SearcherComponent,
    FormHeroesCreateComponent,
    FormHeroesEditComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
