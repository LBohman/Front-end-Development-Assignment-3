import {Injectable} from '@angular/core';
import {map, Observable, of, switchMap, tap} from "rxjs";
import {User} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

const {apiUsers, apiKey} = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) {
  }

  //Login
  public login(username: string): Observable<User> {
    return this.checkUsername(username)
      .pipe(
        switchMap((user: User | undefined) => {
          if (user === undefined) {
            return this.createUser(username);
          }
          return of(user);
        }),
        tap((user: User)=>{

        })
      )
  }

  // Check if user exist
  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
      .pipe(
        map((response: User[]) => response.pop())
      )
  }

  //Create user

  private createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    })

    return this.http.post<User>(apiUsers, user, {
      headers
    })

  }

}
