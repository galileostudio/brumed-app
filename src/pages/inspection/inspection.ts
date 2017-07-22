import { InspectionModalPage } from './../inspection-modal/inspection-modal';
import { CompanyModel } from './../../models/company';
import { OccurrencePage } from './../occurrence/occurrence';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.company = navParams.get("company");
  }

  ionViewDidEnter() {
    if(JSON.parse(localStorage.getItem("inspection"))){
      this.inspectionList = JSON.parse(localStorage.getItem("inspection")).filter(
        inspection => inspection.company_id === this.company.id);
        //console.log(this.company.address)
    }
    if(!this.inspectionList) {
      this.inspectionList = [];
    }
  }

  openModal() {
    let myModal = this.modalCtrl.create(InspectionModalPage);
    myModal.present();
  }

  add(){
    let myModal = this.modalCtrl.create(InspectionAddPage, {
      company_id: this.company.id
    });
    myModal.present();
  }

  edit(index: number){
     let myModal = this.modalCtrl.create(InspectionAddPage, {
      index: index,
      company_id: this.company.id
    });
    myModal.present();
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
