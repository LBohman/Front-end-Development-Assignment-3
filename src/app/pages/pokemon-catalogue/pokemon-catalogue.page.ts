import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {PokemonCatalogueService} from "../../services/pokemon-catalogue.service";

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.css']
})
export class PokemonCataloguePage implements OnInit{
  public get pokemons(): Pokemon[] {
    return this.pokemonCatalogueService.pokemons
  }

  public get loading(): boolean {
    return this.pokemonCatalogueService.loading;
  }

  public get error(): string {
    return this.pokemonCatalogueService.error;
  }

  // DI
  constructor(private readonly pokemonCatalogueService: PokemonCatalogueService) {
  }

  ngOnInit(): void {
    this.pokemonCatalogueService.findAllPokemon();
  }

}
