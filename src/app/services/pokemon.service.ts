import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() {
  }


  geturl(url: string | undefined): string {
    if (url === undefined){
      return "";
    }
    const urlArray = url?.split("/");
    return urlArray[6];


  }

}
