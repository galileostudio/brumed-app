import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RegulationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RegulationProvider {

  public data: any;

  constructor(public http: Http) {
    console.log('Hello RegulationProvider Provider');
  }

  getJsonData(){
    return this.http.get('http://localhost:3000/regulations.json');
  }
  

}
