import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components General and Shared
import { AboutComponent } from './Components/General/about/about.component';
import { HomeComponent } from './Components/General/home/home.component';

//Import Components Own
import { ExamplePipeComponent } from './Components/Pipes/example-pipe/example-pipe.component';
import { LoginComponent } from './Components/General/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'heroes', 
    loadChildren: () => import ('./Components/Heroes/heroes.module').then(m => m.HeroesModule)
  },
  { path: 'forms',
    loadChildren:() => import ('./Components/General/Forms/forms/forms.module').then(m => m.Forms_Module)
  },
  { path: 'pipes', component: ExamplePipeComponent},
  { path: '**', pathMatch: 'full', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}