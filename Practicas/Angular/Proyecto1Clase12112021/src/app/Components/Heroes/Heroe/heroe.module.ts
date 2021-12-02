import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { AppRoutingModule } from 'src/app/app-routing.module';

// Import Components
import { HeroeComponent } from './heroe.component';
import { HeroesRoutingModule } from '../heroes-routing.module';

@NgModule({
  declarations: [
    HeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports:[
    HeroeComponent
  ]
})
export class HeroeModule { }
