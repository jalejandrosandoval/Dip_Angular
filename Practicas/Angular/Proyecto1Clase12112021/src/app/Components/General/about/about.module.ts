import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Components
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
