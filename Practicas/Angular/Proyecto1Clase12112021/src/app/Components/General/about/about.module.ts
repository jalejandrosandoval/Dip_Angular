import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { AboutRoutingModule } from './about-routing.module';

//Import Components
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
