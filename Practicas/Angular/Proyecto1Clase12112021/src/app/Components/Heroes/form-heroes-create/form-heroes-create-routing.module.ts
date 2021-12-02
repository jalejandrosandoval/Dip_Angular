import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Components
import { FormHeroesCreateComponent } from './form-heroes-create.component';

const routes: Routes = [
  {
    path: '',
    component: FormHeroesCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormHeroesCreateRoutingModule { }
