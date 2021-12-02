import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Components
import { ExamplePipeComponent } from './example-pipe.component';

const routes: Routes = [
  {
    path: '', component: ExamplePipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplePipeRoutingModule { }
