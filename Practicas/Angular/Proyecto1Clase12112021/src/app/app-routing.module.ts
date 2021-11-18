import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components General and Shared
import { AboutComponent } from './Components/General/about/about.component';
import { HomeComponent } from './Components/General/home/home.component';
import { SearcherComponent } from './Components/Shared/searcher/searcher.component';

//Import Components Own
import { HeroesComponent } from './Components/Heroes/heroes.component';
import { HeroeComponent } from './Components/Heroe/heroe.component';
import { ExamplePipeComponent } from './Components/Pipes/example-pipe/example-pipe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:index', component: HeroeComponent },
  { path: 'search/:term', component: SearcherComponent},
  { path: 'pipes', component: ExamplePipeComponent},
  { path: '**', pathMatch: 'full', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
