import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { UserService } from './user.service';

const { apiKey, apiUsers } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(
    private readonly http: HttpClient,
    private readonly catalogueService: PokemonCatalogueService,
    private readonly userService: UserService
  ) {}

  geturl(url: string | undefined): string {
    if ( url === undefined ) {
      return "";
    }
    
    const urlArray = url?.split("/");
    return urlArray[6];
  }

  public addToCollection(pokeName: string): Observable<User> {
    if (!this.userService.user) {
      throw new Error("addToCollection: There is no user");
    }
    
    const user: User = this.userService.user;
    const pokemon: Pokemon | undefined = this.catalogueService.pokemonByName(pokeName);

    if (!pokemon) {
      throw new Error("addToCollection: No pokemon with that pokeName: " + pokeName)
    }

    if (this.userService.pokemonInCollection(pokeName)) {
      throw new Error("addToCollection: Pokemon already in collection");
    }

    const headers = new HttpHeaders({
      "content-type": "application/json",
      "x-api-key": apiKey
    });

    this._loading = true;

    return this.http.patch<User>(`${apiUsers}/${user.id}`, {
      pokemon: [...user.pokemon, pokemon]
    }, {
      headers
    })
    .pipe(
      tap((updatedUser: User) => {
        this.userService.user = updatedUser;
      }),
      finalize(() => {
        this._loading = false;
      })
    )
  }

}
