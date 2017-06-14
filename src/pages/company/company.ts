import { InspectionPage } from './../inspection/inspection';
import { CompanyAddPage } from './../company-add/company-add';
import { CompanyModel } from './../../models/company';
import { Component, ViewChild } from '@angular/core';
import {List, IonicPage,  NavController,  NavParams} from 'ionic-angular';

/**
 * Generated class for the CompanyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  public companyList: Array<CompanyModel>;
  @ViewChild(List) list: List;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidEnter(){
    this.companyList = JSON.parse(localStorage.getItem("company"));
    if(!this.companyList) {
      this.companyList = [];
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  edit(index: number){
    this.navCtrl.push(CompanyAddPage, {
      index: index
    });
  }

  add(){
    this.navCtrl.push(CompanyAddPage);
  }
  clear(){
    localStorage.clear();
  }

  itemTapped(event, idx: number) {
    this.navCtrl.push(InspectionPage, {
      index: idx
    });
  } 
}
