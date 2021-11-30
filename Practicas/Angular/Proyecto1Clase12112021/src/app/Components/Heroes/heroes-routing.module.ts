import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearcherComponent } from '../Shared/searcher/searcher.component';
import { FormHeroesCreateComponent } from './form-heroes-create/form-heroes-create.component';
import { HeroeComponent } from './Heroe/heroe.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children:[
      { path: 'search/:term', component: SearcherComponent},
      { path: 'heroe/:index', component: HeroeComponent },
      { path: 'formsheroecreate', component: FormHeroesCreateComponent},
      { path: '*', component: HeroesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
