import { HttpErrorResponse } from '@angular/common/http';
import {Component, Input} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
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

  constructor(private readonly pokemonService: PokemonService, private readonly userService: UserService) {}

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
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      })
  }

  inCollection = false;
  test(pokeName: string) : void {
    // console.log(this.userService.pokemonInCollection(pokeName));
    if (this.userService.pokemonInCollection(pokeName) === true) {
      // console.log(`You already own ${pokeName}!`);
      this.inCollection = true;
    }
  }



}
