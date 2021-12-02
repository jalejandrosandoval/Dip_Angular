import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { FormsRoutingModule } from './forms-routing.module';
import { FormNgModelModule } from '../form-ng-model/form-ng-model.module';
import { Reactive_Forms_Module } from '../reactive-forms/reactive-forms.module';

// Import Components
import { FormsComponent } from './forms.component';

@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormNgModelModule,
    Reactive_Forms_Module
  ]
})
export class Forms_Module { }
