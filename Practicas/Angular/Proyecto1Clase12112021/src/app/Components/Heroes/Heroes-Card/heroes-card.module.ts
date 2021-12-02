import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Components
import { HeroesCardComponent } from './heroes-card.component';

@NgModule({
  declarations: [
    HeroesCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroesCardComponent
  ]
})
export class HeroesCardModule { }
