import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Import Components
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
