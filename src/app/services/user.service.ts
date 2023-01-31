import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {StorageUtil} from "../utils/storage.util";
import {StorageKeys} from "../enums/storage-keys.enums";

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
}
