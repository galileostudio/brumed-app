import { InspectionModel } from './../../models/inspection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the InspectionModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inspection-modal',
  templateUrl: 'inspection-modal.html',
})
export class InspectionModalPage {
  public inspectionList: Array<InspectionModel>;
  public inspectionItem: InspectionModel;
  public title: string;
  public edit: boolean;
  public index: number;
  public company_id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.edit = false;

    this.inspectionList = JSON.parse(localStorage.getItem("inspection"));
    if(!this.inspectionList) {
      this.inspectionList = [];
    }

    this.index = navParams.get("index");
    this.company_id = navParams.get("company_id");
    if(this.index != undefined) {
      this.title = "Editar";
      this.inspectionItem = this.inspectionList[this.index];
      this.edit = true;
    }else{
      this.title = "Adicionar";
      this.inspectionItem = new InspectionModel;
    }
  }

  save(){
    if (this.inspectionItem.name){
      if(this.edit){
        this.inspectionItem.updated_at = Date.now().toString();
        this.inspectionList[this.index] = this.inspectionItem;
      }else{
        this.inspectionItem.company_id = this.company_id;
        this.inspectionList.push(this.inspectionItem);
      }
      localStorage.setItem("inspection", JSON.stringify(this.inspectionList));
      this.navCtrl.pop();
    }
  }
  closeBtn() {
    this.viewCtrl.dismiss();
  }

}
