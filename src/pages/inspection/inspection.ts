import { CompanyModel } from './../../models/company';
import { OccurrencePage } from './../occurrence/occurrence';
import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public company: CompanyModel;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.company = navParams.get("company");
  }

  inspectionModal() {
    let myModal = this.modalCtrl.create('InspectionModalPage');
    myModal.present();
   }

  ionViewDidEnter() {
    if(JSON.parse(localStorage.getItem("inspection"))){
      this.inspectionList = JSON.parse(localStorage.getItem("inspection")).filter(
        inspection => inspection.company_id === this.company.id);
    }
    if(!this.inspectionList) {
      this.inspectionList = [];
    }
  }

  add(){
    this.navCtrl.push(InspectionAddPage, {
      company_id: this.company.id
    });
  }

  edit(index: number){
     this.navCtrl.push(InspectionAddPage, {
      index: index,
      company_id: this.company.id
    });
  }

  delete(index: number){
    this.inspectionList.splice(index, 1); 
    localStorage.setItem("inspection", JSON.stringify(this.inspectionList)); 
  }
  itemTapped(event, idx:number){
    this.navCtrl.push(OccurrencePage, {
      inspection_id: this.inspectionList[idx].id
    });
  }

  back(){
    this.navCtrl.pop();
  }

}
