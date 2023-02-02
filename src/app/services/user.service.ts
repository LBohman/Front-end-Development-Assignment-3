import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {StorageUtil} from "../utils/storage.util";
import {StorageKeys} from "../enums/storage-keys.enums";
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _user?: User;
  
  public get user(): User | undefined {
    return this._user;
  }

  public set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!); // user! means it is never undefined
    this._user = user;
  }


  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  public pokemonInCollection(pokeName: string): boolean {
    if (this._user) {
      return Boolean(this.user?.pokemon.find((pokemon: Pokemon) => pokemon.name === pokeName));
    }
    
    return false;
  }

  public caughtPokemon() {
    if (this._user?.pokemon.length === 0) {
      return [];
    }

    return this._user!.pokemon;
  }
}
