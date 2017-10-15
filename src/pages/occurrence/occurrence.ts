import { OccurrenceAddPage } from './../occurrence-add/occurrence-add';
import { OccurrenceModel } from './../../models/occurrence';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OccurrenceService } from '../../domain/occurrence/occurrence-service';

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


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _occurrenceService: OccurrenceService
  ) {
    this.inspection_id = navParams.get("inspection_id");
  }

  ionViewDidEnter() {
    this._occurrenceService
      .list()
      .then(oc => {
        console.log(oc);
        this.occurrenceList = oc ? oc.filter(occurrence => occurrence.inspection_id === this.inspection_id) : [];
      })
      .catch(err => {
        this.occurrenceList = [];
        console.log(err)
      });

    //  if(JSON.parse(localStorage.getItem("occurrence"))){
    //     this.occurrenceList = JSON.parse(localStorage.getItem("occurrence")).filter(
    //       occurrence => occurrence.inspection_id === this.inspection_id);
    //   }
    //   if(!this.occurrenceList) {
    //     this.occurrenceList = [];
    //   }
  }

  add() {
    this.navCtrl.push(OccurrenceAddPage, {
      inspection_id: this.inspection_id,
      edit: true
    });
  }

  edit(index: number) {
    this.navCtrl.push(OccurrenceAddPage, {
      occurrence: this.occurrenceList[index],
      inspection_id: this.inspection_id,
      edit: true
    });
  }

  show(index: number) {
    this.navCtrl.push(OccurrenceAddPage, {
      occurrence: this.occurrenceList[index],
      edit: false
    });
  }

  delete(index: number) {
    this._occurrenceService
      .delete(this.occurrenceList[index])
      .then(resp => {
        console.log(resp);
        this.occurrenceList.splice(index, 1);
      })
      .catch(err => console.log(err));

    // localStorage.setItem("occurrence", JSON.stringify(this.occurrenceList));
  }

}
