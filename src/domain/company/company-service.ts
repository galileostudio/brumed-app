import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
// import { Company } from "./company";
import { CompanyModel } from "../../models/company";

@Injectable()
export class CompanyService {
  private _apiUrl: string = 'http://178.62.226.175/brumed-api';

  constructor(private _http: Http) { }

  add(company: CompanyModel) {
    return this._http
      .post(`${this._apiUrl}/companies.json`, company)
      .map(response => response.json())
      .toPromise();
  }

  list() {
    return this._http
      .get(`${this._apiUrl}/companies.json`)
      .map(response => response.json())
      .toPromise()
      .then(comp => comp.companies);
  }

  view(company: CompanyModel) {
    return this._http
      .put(`${this._apiUrl}/companies/${company.id}.json`, company)
      .map(response => response.json())
      .toPromise();
  }

  edit(company: CompanyModel) {
    return this._http
      .post(`${this._apiUrl}/companies/${company.id}.json`,company)
      .map(response => response.json())
      .toPromise();
  }

  delete(company: CompanyModel) {
    return this._http
      .delete(`${this._apiUrl}/companies/${company.id}.json`)
      .map(response => response.json())
      .toPromise();
  }
}
