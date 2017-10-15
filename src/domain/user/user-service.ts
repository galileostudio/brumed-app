
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user";

@Injectable()
export class UserService {
  private _apiUrl: string = 'http://178.62.226.175/brumed-api';

  constructor(private _http: Http) { }

  login(user: User) {
    return this._http
      .post(`${this._apiUrl}/users/login`, user)
      .map(response => response.json())
      .toPromise();
  }
}
