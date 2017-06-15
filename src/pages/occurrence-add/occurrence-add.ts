import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OccurrenceModel } from './../../models/occurrence';

/**
 * Generated class for the OccurrenceAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-occurrence-add',
  templateUrl: 'occurrence-add.html',
})
export class OccurrenceAddPage {
  public occurrenceList: Array<OccurrenceModel>;
  public occurrenceItem: OccurrenceModel;
  public title: string;
  public edit: boolean;
  public index: number;
  public inspection_id: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.edit = false;

    this.occurrenceList = JSON.parse(localStorage.getItem("occurrence"));
    if(!this.occurrenceList) {
      this.occurrenceList = [];
    }

    this.index = navParams.get("index");
    this.inspection_id = navParams.get("inspection_id");
    if(this.index != undefined) {
      this.title = "Editar";
      this.occurrenceItem = this.occurrenceList[this.index];
      this.edit = true;
    }else{
      this.title = "Adicionar";
      this.occurrenceItem = new OccurrenceModel;
    }
  }

  save(){
    if (this.occurrenceItem.description){
      if(this.edit){
        this.occurrenceItem.updated_at = Date.now();
        this.occurrenceList[this.index] = this.occurrenceItem;
      }else{
        this.occurrenceItem.inspection_id = this.inspection_id;
        this.occurrenceList.push(this.occurrenceItem);
      }
      localStorage.setItem("occurrence", JSON.stringify(this.occurrenceList));
      this.navCtrl.pop();
    }
  }

}
