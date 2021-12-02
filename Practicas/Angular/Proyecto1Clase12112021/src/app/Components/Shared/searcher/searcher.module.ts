import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { BrowserModule } from '@angular/platform-browser';

// Import Components
import { SearcherComponent } from './searcher.component';
import { HeroesCardModule } from '../../Heroes/Heroes-Card/heroes-card.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearcherComponent
  ],
  imports: [
    CommonModule,
    HeroesCardModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    SearcherComponent
  ]
})
export class SearcherModule { }
