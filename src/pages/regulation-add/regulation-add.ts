import { RegulationModel } from './../../models/regulation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegulationAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-regulation-add',
  templateUrl: 'regulation-add.html',
})
export class RegulationAddPage {
  public regulationList: Array<RegulationModel>;
  public regulationItem: RegulationModel;
  public title: string;
  private index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.regulationList = JSON.parse(localStorage.getItem("regulation"));
    if(!this.regulationList) {
      this.regulationList = [];
    }
    this.regulationItem = new RegulationModel;
    this.index = navParams.get("index");
    if(this.index != undefined) {
      this.title = "Editar";
      this.regulationItem = this.regulationList[this.index];
    }else{
      this.title = "Adicionar";
    }
  }

  ionViewDidLoad() {
    console.log(this.regulationList);
  }

  save(){
    if(this.regulationItem.title && this.regulationItem.description) {
      this.regulationList.push(this.regulationItem);
      localStorage.setItem("regulation", JSON.stringify(this.regulationList));
      //his.navCtrl.pop();
    }
    else{
      console.log("Ta faltando dado aí, veado")
    }
  }

}
