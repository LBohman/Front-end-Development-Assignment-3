import { HttpErrorResponse } from '@angular/common/http';
import {Component, Inject, Input} from '@angular/core';
import { User } from 'src/app/models/user.model';
import {Pokemon} from "../../models/pokemon.model";
import {PokemonService} from "../../services/pokemon.service";



@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})


export class PokemonListItemComponent {
  @Input() pokemon?: Pokemon;

  get loading(): boolean {
    return this.pokemonService.loading;
  }

  constructor(
    private readonly pokemonService: PokemonService
  ) {}

  getPokemonImage() {
  const pokemonId = this.pokemonService.geturl(this.pokemon?.url)

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
  }


  addPokemonToCollection(): void {
    // this.pokemon.isFavorite = !this.pokemon.isFavorite
    this.pokemonService.addToCollection(this.pokemon!.name)
      .subscribe({
        next: (response: User) => {
          console.log("NEXT", response);
          this.pokemon!.isInCollection = true;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      })
  }

}
