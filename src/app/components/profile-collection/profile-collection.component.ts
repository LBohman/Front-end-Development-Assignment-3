import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { StorageKeys } from 'src/app/enums/storage-keys.enums';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-profile-collection',
  templateUrl: './profile-collection.component.html',
  styleUrls: ['./profile-collection.component.css']
})
export class ProfileCollectionComponent {

  @Input() collection?: Pokemon[];

  public get user(): User | undefined {
    return this.userService.user
  }

  username = this.userService.user?.username

  constructor(private readonly pokemonService: PokemonService, private readonly userService: UserService) {}

  getPokemonImage(url: string) {
    
    const pokemonId = this.pokemonService.geturl(url);
  
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    }

  deletePokemon(index: number): void {

    this.collection?.splice(index, 1);
    const pokemonList = this.userService.user?.pokemon;
      
    console.log(this.userService.user);
    this.pokemonService.removePokemonFromCollection(pokemonList!)
      .subscribe({
        next: (response: User) => {
          console.log("NEXT", response);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      })
      
  }
}
