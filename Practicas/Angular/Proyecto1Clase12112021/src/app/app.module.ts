import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import Services
import { HeroesService } from './Services/Heroes/heroes.service';
import { LoginService } from './Services/Login/login.service';

// Import Pipes
import { HeroesModule } from './Components/Heroes/heroes.module';
import { NavBarModule } from './Components/Shared/nav-bar/nav-bar.module';
import { LoginModule } from './Components/General/login/login.module';
import { FooterModule } from './Components/Shared/footer/footer.module';
import { ExamplePipeModule } from './Components/Pipes/example-pipe/example-pipe.module';
import { HomeModule } from './Components/General/home/home.module';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeroesModule,
    NavBarModule,
    FooterModule
  ],
  providers: [
    HeroesService, 
    LoginService,
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
