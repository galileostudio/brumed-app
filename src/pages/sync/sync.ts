import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { RegulationProvider } from './../../providers/regulation/regulation';
import { CompanyProvider } from './../../providers/company/company';
import { InspectionProvider } from './../../providers/inspection/inspection';
import { OccurrenceProvider } from './../../providers/occurrence/occurrence';

/**
 * Generated class for the SyncPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sync',
  templateUrl: 'sync.html',
})
export class SyncPage {
  public companies: any;
  public inspections: any;
  public occurrences: any;
  public regulations: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController, public toastCtrl: ToastController, public regulationProvider: RegulationProvider, public companyProvider: CompanyProvider, public inspectionProvider: InspectionProvider, public occurrenceProvider: OccurrenceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncPage');
  }

  loadRegulations(){
    this.regulationProvider.getJsonData().subscribe(
      result => {
        this.regulations = result;
        console.log("Success : "+JSON.stringify(this.regulations));
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    );
  }
  loadCompanies(){
    this.companyProvider.getJsonData().subscribe(
      result => {
        this.companies = result;
        console.log("Success : "+JSON.stringify(this.companies));
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    );
  }
  loadInspections(){
    this.inspectionProvider.getJsonData().subscribe(
      result => {
        this.inspections = result;
        console.log("Success : "+JSON.stringify(this.inspections));
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    );
  }
  loadOccurrences(){
    this.occurrenceProvider.getJsonData().subscribe(
      result => {
        this.occurrences = result;
        console.log("Success : "+JSON.stringify(this.occurrences));
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    );
  }
  postOccurrences(){
    this.occurrenceProvider.postJsonData();
  }

  sync(){
    let loading = this.loadCtrl.create({
      content: 'Sincronizando dados',
      duration: 700,
      spinner: 'crescent'
    });
    loading.present();
    this.confirmationToast();
    this.postOccurrences();
  }
    confirmationToast(){
    let toast = this.toastCtrl.create({
    message: `Os dados foram sincronizados com sucesso!`,
    duration: 2000,
    showCloseButton: false,
    cssClass: "toast-success"
  });
    toast.present();
  }

}
