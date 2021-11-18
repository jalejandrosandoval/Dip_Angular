import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import General and Shared
import { NavBarComponent } from './Components/Shared/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/General/home/home.component';
import { AboutComponent } from './Components/General/about/about.component';
import { SearcherComponent } from './Components/Shared/searcher/searcher.component';

// Import Services
import { HeroesService } from './Services/Heroes/heroes.service';

// Import Components Own
import { HeroesComponent } from './Components/Heroes/heroes.component';
import { HeroesCardComponent } from './Components/Heroes-Card/heroes-card.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HeroeComponent } from './Components/Heroe/heroe.component';
import { ExamplePipeComponent } from './Components/Pipes/example-pipe/example-pipe.component';

// Import Pipes
import { PasswordPipe } from './Pipes/Password/password.pipe';
import { UpercasePipe } from './Pipes/Upercase/upercase.pipe';
import { CapitalizePipePipe } from './Pipes/CapitalizePipe/capitalize-pipe.pipe';
import { SecureDOMPipe } from './Pipes/SecureDOM/secure-dom.pipe';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    SearcherComponent,
    HeroesComponent,
    HeroesCardComponent,
    FooterComponent,
    HeroeComponent,
    PasswordPipe,
    UpercasePipe,
    ExamplePipeComponent,
    CapitalizePipePipe,
    SecureDOMPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
