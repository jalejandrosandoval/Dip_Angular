import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Components
import { ReactiveFormsComponent } from './reactive-forms.component';

@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsComponent    
  ]
})
export class Reactive_Forms_Module { }
