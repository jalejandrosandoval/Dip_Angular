import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', 
    loadChildren: () => import ('./Components/General/login/login.module').then(m => m.LoginModule)},
  { path: 'home', 
    loadChildren: () => import ('./Components/General/home/home.module').then(m => m.HomeModule) },
  { path: 'about', 
    loadChildren: () => import ('./Components/General/about/about.module').then(m => m.AboutModule) },
  { path: 'heroes', 
    loadChildren: () => import ('./Components/Heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'forms',
    loadChildren:() => import ('./Components/General/Forms/forms/forms.module').then(m => m.Forms_Module)},
  { path: 'pipes', 
    loadChildren: () => import ('./Components/Pipes/example-pipe/example-pipe.module').then(m => m.ExamplePipeModule)},
  { path: '**', pathMatch: 'full', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}