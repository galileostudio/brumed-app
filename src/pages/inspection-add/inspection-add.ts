import { InspectionModel } from './../../models/inspection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InspectionAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inspection-add',
  templateUrl: 'inspection-add.html',
})
export class InspectionAddPage {
  public inspectionList: Array<InspectionModel>;
  public inspectionItem: InspectionModel;
  public title: string;
  public edit: boolean;
  public index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.edit = false;

    this.inspectionList = JSON.parse(localStorage.getItem("inspection"));
    if(!this.inspectionList) {
      this.inspectionList = [];
    }

    this.index = navParams.get("index");
    if(this.index != undefined) {
      this.title = "Editar";
      this.inspectionItem = this.inspectionList[this.index];
      this.edit = true;
    }else{
      this.title = "Adicionar";
      this.inspectionItem = new InspectionModel;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InspectionAddPage');
  }

  save(){


    if (this.inspectionItem.description){
      if(this.edit){
        this.inspectionItem.updated_at = Date.now();
        this.inspectionList[this.index] = this.inspectionItem;
      }else{
        this.inspectionList.push(this.inspectionItem);
      }
      localStorage.setItem("inspection", JSON.stringify(this.inspectionList));
      this.navCtrl.pop();
    }
  }

}
