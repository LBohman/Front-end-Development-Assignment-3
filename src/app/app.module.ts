import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {HttpClientModule} from "@angular/common/http";

// Decorator
@NgModule({
  declarations: [ // Components comes to declarations
    AppComponent,
    LoginPage,
    PokemonCataloguePage,
    ProfilePage,
    LoginFormComponent
  ],
  imports: [ // Modules comes to imports
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
