import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { HomeRoutingModule } from './home-routing.module';

// Import Components
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }