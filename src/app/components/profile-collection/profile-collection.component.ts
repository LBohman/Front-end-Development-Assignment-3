import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-profile-collection',
  templateUrl: './profile-collection.component.html',
  styleUrls: ['./profile-collection.component.css']
})
export class ProfileCollectionComponent {

  @Input() collection?: Pokemon[];

  constructor(private readonly pokemonService: PokemonService) {}

  getPokemonImage(url: string) {

    const pokemonId = this.pokemonService.geturl(url);
  
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    }
}
