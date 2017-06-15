import { OccurrenceAddPage } from './../occurrence-add/occurrence-add';
import { OccurrenceModel } from './../../models/occurrence';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OccurrencePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-occurrence',
  templateUrl: 'occurrence.html',
})
export class OccurrencePage {
  private inspection_id: string;
  public occurrenceList: Array<OccurrenceModel>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inspection_id = navParams.get("inspection_id");
  }

  ionViewDidEnter(){
   if(JSON.parse(localStorage.getItem("occurrence"))){
      this.occurrenceList = JSON.parse(localStorage.getItem("occurrence")).filter(
        occurrence => occurrence.inspection_id === this.inspection_id);
    }
    if(!this.occurrenceList) {
      this.occurrenceList = [];
    }
  }

  add(){
    this.navCtrl.push(OccurrenceAddPage, {
      inspection_id: this.inspection_id
    });
  }

  edit(index: number){
    this.navCtrl.push(OccurrenceAddPage, {
      index: index,
      inspection_id: this.inspection_id
    });
  }

  delete(index: number){
    this.occurrenceList.splice(index, 1); 
    localStorage.setItem("occurrence", JSON.stringify(this.occurrenceList)); 
  }

}
