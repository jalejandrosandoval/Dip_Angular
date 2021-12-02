import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Import Components
import { FormNgModelComponent } from './form-ng-model.component';

@NgModule({
  declarations: [
    FormNgModelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormNgModelComponent
  ]
})
export class FormNgModelModule { }
