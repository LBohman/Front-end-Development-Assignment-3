import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage {

  constructor(private readonly userService: UserService) {}

  public collection: Pokemon[] = this.userService.caughtPokemon();
}
