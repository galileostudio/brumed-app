import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
// import { Occurrence } from "./occurrence";
import { OccurrenceModel } from "../../models/occurrence";

@Injectable()
export class OccurrenceService {
  private _apiUrl: string = 'http://178.62.226.175/brumed-api';

  constructor(private _http: Http) { }

  add(occurrence: OccurrenceModel) {
    return this._http
      .post(`${this._apiUrl}/occurrences.json`, occurrence)
      .map(response => response.json())
      .toPromise();
  }

  list() {
    return this._http
      .get(`${this._apiUrl}/occurrences.json`)
      .map(response => response.json())
      .toPromise()
      .then(oc => oc.occurrences);
  }

  view(occurrence: OccurrenceModel) {
    return this._http
      .put(`${this._apiUrl}/occurrences/${occurrence.id}.json`, occurrence)
      .map(response => response.json())
      .toPromise();
  }

  edit(occurrence: OccurrenceModel) {
    return this._http
      .post(`${this._apiUrl}/occurrences/${occurrence.id}.json`, occurrence)
      .map(response => response.json())
      .toPromise();
  }

  delete(occurrence: OccurrenceModel) {
    return this._http
      .delete(`${this._apiUrl}/occurrences/${occurrence.id}.json`)
      .map(response => response.json())
      .toPromise();
  }
}
