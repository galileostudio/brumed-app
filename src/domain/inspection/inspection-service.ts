import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
// import { Inspection } from "./inspection";
import { InspectionModel } from "../../models/inspection";

@Injectable()
export class InspectionService {
  private _apiUrl: string = 'http://178.62.226.175/brumed-api';

  constructor(private _http: Http) { }

  add(inspection: InspectionModel) {
    let postParams = {
      name: inspection.name,
      company_id: inspection.company_id
    }
    console.log(JSON.stringify(postParams));
    return this._http
      .post(`${this._apiUrl}/inspections.json`, postParams)
      .map(response => response.json())
      .toPromise();
  }

  list(companyId: string) {
    return this._http
      .get(`${this._apiUrl}/inspections.json?company_id=${companyId}`)
      .map(response => response.json())
      .toPromise()
      .then(insp => insp.inspections);
  }

  view(inspection: InspectionModel) {
    return this._http
      .put(`${this._apiUrl}/inspections/${inspection.id}.json`, inspection)
      .map(response => response.json())
      .toPromise();
  }

  edit(inspection: InspectionModel) {
    let postParams = {
      name: inspection.name,
      company_id: inspection.company_id
    }
    return this._http
      .put(`${this._apiUrl}/inspections/${inspection.id}.json`, postParams)
      .map(response => response.json())
      .toPromise();
  }

  delete(inspection: InspectionModel) {
    return this._http
      .delete(`${this._apiUrl}/inspections/${inspection.id}.json`)
      .map(response => response.json())
      .toPromise();
  }
}
