import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesCardModule } from './Heroes-Card/heroes-card.module';
import { HeroeModule } from './Heroe/heroe.module';
import { FormHeroesEditModule } from './form-heroes-edit/form-heroes-edit.module';
import { FormHeroesCreateModule } from './form-heroes-create/form-heroes-create.module';


@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    HeroesCardModule,
    HeroeModule,
    FormHeroesEditModule,
    FormHeroesCreateModule
  ]
})
export class HeroesModule { }
