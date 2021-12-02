import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesCardModule } from './Heroes-Card/heroes-card.module';
import { HeroeModule } from './Heroe/heroe.module';
import { FormHeroesEditModule } from './form-heroes-edit/form-heroes-edit.module';
import { FormHeroesCreateModule } from './form-heroes-create/form-heroes-create.module';

// Import Components
import { HeroesComponent } from './heroes.component';
import { SearcherModule } from '../Shared/searcher/searcher.module';

@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SearcherModule,
    HeroesCardModule,
    HeroeModule,
    FormHeroesCreateModule,
    FormHeroesEditModule
  ]
})
export class HeroesModule { }
