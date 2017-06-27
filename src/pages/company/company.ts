import { LoginPage } from './../login/login';
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
  public filterCompany:string;
  @ViewChild(List) list: List;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter(){
    this.fullCompany();
  }

  private fullCompany(){
    this.companyList = JSON.parse(localStorage.getItem("company"));
    if(!this.companyList) {
      this.companyList = [];
    }
    return this.companyList;
  }

  ionViewDidLoad() {
    var user = new Boolean;
    user = true;
    if(user = true){
      this.navCtrl.push(LoginPage)
    }
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
      company: this.companyList[idx]
    });
  }

  onInput(event){
    this.fullCompany();
    let val = event.target.value;
    if (val && val.trim() != '') {
      this.companyList = this.companyList.filter((company) => {
        return (company.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
