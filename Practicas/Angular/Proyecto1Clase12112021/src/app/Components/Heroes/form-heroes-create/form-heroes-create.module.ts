import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Moduless
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Import Components
import { FormHeroesCreateComponent } from './form-heroes-create.component';

@NgModule({
  declarations: [
    FormHeroesCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    FormHeroesCreateComponent
  ]
})
export class FormHeroesCreateModule { }