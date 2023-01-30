import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPage} from "./pages/login/login.page";
import {PokemonCataloguePage} from "./pages/pokemon-catalogue/pokemon-catalogue.page";
import {ProfilePage} from "./pages/profile/profile.page";

const routes: Routes=[
  {
    path:"",
    component: LoginPage
  },
  {
    path:"pokemon",
    component: PokemonCataloguePage
  },
  {
  path:"profile",
    component:ProfilePage
  },

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], // Import a module
  exports: [
    RouterModule
  ] // Expose module and it's features
})

export class AppRoutingModule {
}
