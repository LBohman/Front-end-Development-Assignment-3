import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';


// Decorator
@NgModule({

  declarations: [ // Components comes to declarations
    AppComponent,
    LoginPage,
    PokemonCataloguePage,
    ProfilePage,
    LoginFormComponent,
    NavbarComponent

  ],
  imports: [ // Modules comes to imports
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
