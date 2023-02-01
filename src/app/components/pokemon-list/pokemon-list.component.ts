import {Component, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent{

  // This allow us to pass information into this component
  @Input() pokemons: Pokemon[] = [];
  constructor(private readonly pokemonService: PokemonService) {
  }

  public getPokemonImage(){



  }
}
