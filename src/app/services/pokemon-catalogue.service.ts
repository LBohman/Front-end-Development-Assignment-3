import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Pokemon, PokemonResponse} from "../models/pokemon.model";
import {finalize, map} from "rxjs";

const {apiPokemon} = environment

@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private _pokemons: Pokemon[] = [];


  private _error: string = "";
  private _loading: boolean = false;

  // public get getPokemonImg(): string {
  //
  // }
  public get loading(): boolean {
    return this._loading;
  }

  public get pokemons(): Pokemon[] { //when use this method 'pokemons()' can just write like 'pokemons' no need ()
    return this._pokemons;
  }

  public get error(): string {
    return this._error
  }
  constructor(private readonly http: HttpClient) {
  }

  public findAllPokemon(): void {
    this._loading = true;
    this.http.get<PokemonResponse>(apiPokemon)
      .pipe(map((pokemon:PokemonResponse)=>{
        return pokemon.results
      }),
        finalize(()=>{
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemons: Pokemon[]) => {
          // console.log(pokemons)
          this._pokemons = pokemons;
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      })
  }

  public pokemonByName(name: string): Pokemon | undefined {
    return this._pokemons.find((pokemon: Pokemon) => pokemon.name === name);
  }
}
