import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-collection',
  templateUrl: './profile-collection.component.html',
  styleUrls: ['./profile-collection.component.css']
})
export class ProfileCollectionComponent {

  @Input() collection?: Pokemon[];

  constructor(private readonly pokemonService: PokemonService, private readonly userService: UserService) {}

  public get user(): string | undefined {
    return this.userService.user?.username
  }
  

  getPokemonImage(url: string) {
    
    const pokemonId = this.pokemonService.geturl(url);
  
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    }
}
