
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user";

@Injectable()
export class UserService {
  private _apiUrl: string = 'http://178.62.226.175/brumed-api';
  private _userKey: string = 'userLogged';
  private _loggedUser: User;
  private _response: User;

  constructor(private _http: Http) { }

  login(user: User) {
    console.log(JSON.stringify(user));
    return this._http
      .post(`${this._apiUrl}/users/login`, user)
      .map(response => response.json())
      .toPromise()
      .then(user => {
        this._loggedUser = user['name'];
        console.log("_loggedUser:   "+this._loggedUser);
        localStorage.clear();
        localStorage.setItem(this._userKey, JSON.stringify(this._loggedUser));
      });
  }

  get loggedUser() {
    return this._loggedUser;
  }

  userLogged(){
    return this._loggedUser;
  }

  isLogged() {
    this._loggedUser = JSON.parse(localStorage.getItem(this._userKey));
    return this._loggedUser && this._loggedUser ? true : false;
  }
}
