import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InspectionModel } from './../../models/inspection';
import { InspectionAddPage } from './../inspection-add/inspection-add';
/**
 * Generated class for the InspectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inspection',
  templateUrl: 'inspection.html',
})
export class InspectionPage {
  public inspectionList: Array<InspectionModel>;
  public index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = navParams.get("index");
  }

  ionViewDidEnter() {
    if(JSON.parse(localStorage.getItem("inspection"))){
      this.inspectionList = JSON.parse(localStorage.getItem("inspection")).filter(
        inspection => inspection.company_id === this.index);
    }
    if(!this.inspectionList) {
      this.inspectionList = [];
    }
  }

  add(){
    this.navCtrl.push(InspectionAddPage, {
      company_id: this.index
    });
  }

  edit(index: number){
     this.navCtrl.push(InspectionAddPage, {
      index: index,
      company_id: this.index
    });
  }

  delete(index: number){
    this.inspectionList.splice(index, 1); 
    localStorage.setItem("inspection", JSON.stringify(this.inspectionList)); 
  }

}
