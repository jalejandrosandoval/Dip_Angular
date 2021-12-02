import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipesModule } from 'src/app/Pipes/pipes.module';

// Import Components
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PipesModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
