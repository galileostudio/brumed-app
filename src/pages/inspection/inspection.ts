import { InspectionModalPage } from './../inspection-modal/inspection-modal';
import { CompanyModel } from './../../models/company';
import { OccurrencePage } from './../occurrence/occurrence';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { InspectionModel } from './../../models/inspection';
import { InspectionService } from '../../domain/inspection/inspection-service';
//import { InspectionAddPage } from './../inspection-add/inspection-add';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private _inspectionService: InspectionService
  ) {
    this.company = navParams.get("company");
  }

  ionViewDidLoad() {
    this.loadInspections();
    // if (JSON.parse(localStorage.getItem("inspection"))) {
    //   this.inspectionList = JSON.parse(localStorage.getItem("inspection")).filter(
    //     inspection => inspection.company_id === this.company.id);
    //   //console.log(this.company.address)
    // }
    // if (!this.inspectionList) {
    //   this.inspectionList = [];
    // }
  }



  add() {
    console.log("antes de chamar");
    let myModal = this.modalCtrl.create(InspectionModalPage, {
      company_id: this.company.id
    });
    console.log("depois de chamar");
    myModal.onDidDismiss(() => {
      this.loadInspections();
      // if (JSON.parse(localStorage.getItem("inspection"))) {
      //   this.inspectionList = JSON.parse(localStorage.getItem("inspection")).filter(
      //     inspection => inspection.company_id === this.company.id);
      // }
      // if (!this.inspectionList) {
      //   this.inspectionList = [];
      // }
    });
    myModal.present();
  }

  edit(index: number) {
    let myModal = this.modalCtrl.create(InspectionModalPage, {
      inspection: this.inspectionList[index],
      company_id: this.company.id
    });
    myModal.onDidDismiss(() => {
      this.loadInspections();
      // if (JSON.parse(localStorage.getItem("inspection"))) {
      //   this.inspectionList = JSON.parse(localStorage.getItem("inspection")).filter(
      //     inspection => inspection.company_id === this.company.id);
      // }
      // if (!this.inspectionList) {
      //   this.inspectionList = [];
      // }
    });
    myModal.present();
  }

  delete(index: number) {
    this._inspectionService
      .delete(this.inspectionList[index])
      .then(insp => {
        console.log(insp);
        this.inspectionList.splice(index, 1);
      })
      .catch(err => console.log(err));
    // localStorage.setItem("inspection", JSON.stringify(this.inspectionList));
  }

  itemTapped(event, idx: number) {
    this.navCtrl.push(OccurrencePage, {
      inspection_id: this.inspectionList[idx].id
    });
  }

  back() {
    this.navCtrl.pop();
  }

  loadInspections() {
    this._inspectionService
      .list(this.company.id)
      .then(insp => {
        console.log(insp);
        this.inspectionList = insp ? insp : [];
      })
      .catch(err => {
        this.inspectionList = [];
        console.log(err)
      });
  }

}
