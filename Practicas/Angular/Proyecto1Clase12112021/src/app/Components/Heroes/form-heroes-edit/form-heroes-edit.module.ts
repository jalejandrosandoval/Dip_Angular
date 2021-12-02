import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Components
import { FormHeroesEditComponent } from './form-heroes-edit.component';

@NgModule({
  declarations: [
    FormHeroesEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormHeroesEditComponent
  ]
})
export class FormHeroesEditModule { }
