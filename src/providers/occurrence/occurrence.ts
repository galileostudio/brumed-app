import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OccurrenceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OccurrenceProvider {

  constructor(public http: Http) {
    console.log('Hello OccurrenceProvider Provider');
  }
  getJsonData(){
    return this.http.get('http://localhost:3000/occurrences.json');
  }
  postJsonData(){
    this.http.post('http://localhost:3000/occurrences.json', localStorage.getItem("occurrence"), Option);
  }
}
