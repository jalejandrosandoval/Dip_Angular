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
import { SearcherComponent } from './Components/Shared/searcher/searcher.component';
import { FormNgModelComponent } from './Components/General/Forms/form-ng-model/form-ng-model.component';

// Import Services
import { HeroesService } from './Services/Heroes/heroes.service';
import { LoginService } from './Services/Login/login.service';

// Import Components Own
import { HeroesComponent } from './Components/Heroes/heroes.component';
import { HeroesCardComponent } from './Components/Heroes-Card/heroes-card.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HeroeComponent } from './Components/Heroe/heroe.component';
import { ExamplePipeComponent } from './Components/Pipes/example-pipe/example-pipe.component';
import { LoginComponent } from './Components/General/login/login.component';

// Import Pipes
import { PasswordPipe } from './Pipes/Password/password.pipe';
import { UpercasePipe } from './Pipes/Upercase/upercase.pipe';
import { CapitalizePipePipe } from './Pipes/CapitalizePipe/capitalize-pipe.pipe';
import { SecureDOMPipe } from './Pipes/SecureDOM/secure-dom.pipe';
import { LimitStringPipe } from './Pipes/LimitString/limit-string.pipe';
import { FormsComponent } from './Components/General/Forms/forms/forms.component';

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
    SecureDOMPipe,
    LoginComponent,
    LimitStringPipe,
    FormNgModelComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [
    HeroesService, {provide: LOCALE_ID, useValue: 'es'},
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
