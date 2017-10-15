import { InspectionModel } from './../../models/inspection';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InspectionService } from '../../domain/inspection/inspection-service';

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
  public index: any;
  public company_id: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private _inspectionService: InspectionService
  ) {
    this.edit = false;

    // this.inspectionList = JSON.parse(localStorage.getItem("inspection"));
    // if(!this.inspectionList) {
    //   this.inspectionList = [];
    // }

    this.index = navParams.get("inspection");
    this.company_id = navParams.get("company_id");
    if(this.index != undefined) {
      this.title = "Editar";
      this.inspectionItem = this.index;
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
        this._inspectionService
          .edit(this.inspectionItem)
          .then(insp => {
            console.log(insp);
            this.navCtrl.pop();
          })
          .catch(err => console.log(err));
        // this.inspectionList[this.index] = this.inspectionItem;
      }else{
        this.inspectionItem.company_id = this.company_id;
        this._inspectionService
          .add(this.inspectionItem)
          .then(insp => {
            console.log(insp);
            this.navCtrl.pop();
          })
          .catch(err => console.log(err));
        // this.inspectionList.push(this.inspectionItem);
      }
      // localStorage.setItem("inspection", JSON.stringify(this.inspectionList));
    }
  }
  closeBtn() {
    this.viewCtrl.dismiss();
  }

}
