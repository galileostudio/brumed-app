import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyModel } from './../../models/company'
/**
 * Generated class for the CompanyAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-company-add',
  templateUrl: 'company-add.html',
})
export class CompanyAddPage {
  public companyList: Array<CompanyModel>;
  public companyItem: CompanyModel;
  public title: string;
  private index: number;
  private edit: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.edit = false;
    
    this.companyList = JSON.parse(localStorage.getItem("company"));
    if(!this.companyList) {
      this.companyList = [];
    }
    this.companyItem = new CompanyModel;
    this.index = navParams.get("index");
    if(this.index != undefined) {
      this.title = "Editar";
      this.companyItem = this.companyList[this.index];
      this.edit = true;
    }else{
      this.title = "Adicionar";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyAddPage');
  }

  save(){
    if(this.companyItem.name && this.companyItem.cnpj && this.companyItem.phone) {
      if(this.edit){
        this.companyItem.updated_at = Date.now();
        this.companyList[this.index] = this.companyItem;
      }else{
        this.companyList.push(this.companyItem);
      }
      localStorage.setItem("company", JSON.stringify(this.companyList));
      this.navCtrl.pop();
    }
  }
}