import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { HeroesCardModule } from '../../Heroes/Heroes-Card/heroes-card.module';

// Import Components
import { SearcherComponent } from './searcher.component';

@NgModule({
  declarations: [
    SearcherComponent
  ],
  imports: [
    CommonModule,
    HeroesCardModule
  ],
  exports: [
    SearcherComponent
  ]
})
export class SearcherModule { }
