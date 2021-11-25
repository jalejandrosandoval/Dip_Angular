import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearcherComponent } from '../Shared/searcher/searcher.component';
import { HeroeComponent } from './Heroe/heroe.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children:[
      { path: 'search/:term', component: SearcherComponent},
      { path: 'heroe/:index', component: HeroeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
