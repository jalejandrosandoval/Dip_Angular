import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import General and Shared
import { NavBarComponent } from './Components/Shared/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/General/home/home.component';
import { AboutComponent } from './Components/General/about/about.component';
import { FormNgModelComponent } from './Components/General/Forms/form-ng-model/form-ng-model.component';
import { FormsComponent } from './Components/General/Forms/forms/forms.component';
import { ReactiveFormsComponent } from './Components/General/Forms/reactive-forms/reactive-forms.component';

// Import Services
import { HeroesService } from './Services/Heroes/heroes.service';
import { LoginService } from './Services/Login/login.service';

// Import Components Own
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HeroeComponent } from './Components/Heroes/Heroe/heroe.component';
import { ExamplePipeComponent } from './Components/Pipes/example-pipe/example-pipe.component';
import { LoginComponent } from './Components/General/login/login.component';

// Import Pipes
import { PipesModule } from './Pipes/pipes.module';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeroeComponent,
    ExamplePipeComponent,
    LoginComponent,
    FormNgModelComponent,
    FormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    PipesModule    
  ],
  providers: [
    HeroesService, 
    LoginService,
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
