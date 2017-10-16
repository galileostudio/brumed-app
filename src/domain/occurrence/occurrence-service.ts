import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
// import { Occurrence } from "./occurrence";
import { OccurrenceModel } from "../../models/occurrence";

@Injectable()
export class OccurrenceService {
  private _apiUrl: string = 'http://178.62.226.175/brumed-api';

  constructor(private _http: Http) { }

  add(occurrence: OccurrenceModel) {
    let postParams = {
      description: occurrence.description,
      severity: occurrence.severity,
      todo: occurrence.due_time,
      regulation_id: occurrence.nr_code,
      inspection_id: occurrence.inspection_id
    }
    console.log(JSON.stringify(occurrence));
    return this._http
      .post(`${this._apiUrl}/occurrences.json`, postParams)
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
