import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Regulation } from "./regulation";

@Injectable()
export class RegulationService {
  private _apiUrl: string = 'http://178.62.226.175/brumed-api';

  constructor(private _http: Http) { }

  list(regulation: Regulation) {
    return this._http
      .get(`${this._apiUrl}/regulations.json`)
      .map(response => response.json())
      .toPromise();
  }
}
