import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

// Import Pipes
import { PasswordPipe } from './Pipes/Password/password.pipe';
import { UpercasePipe } from './Pipes/Upercase/upercase.pipe';

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
    UpercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
