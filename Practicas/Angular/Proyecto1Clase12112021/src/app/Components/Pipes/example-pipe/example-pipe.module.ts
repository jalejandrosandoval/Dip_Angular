import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Components
import { ExamplePipeComponent } from './example-pipe.component';
import { PipesModule } from 'src/app/Pipes/pipes.module';
import { ExamplePipeRoutingModule } from './example-pipe-routing.module';

@NgModule({
  declarations: [
    ExamplePipeComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ExamplePipeRoutingModule
  ],
  exports: [
    ExamplePipeComponent
  ]
})
export class ExamplePipeModule { }
