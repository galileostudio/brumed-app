import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncPage');
  }
  sync(){
    let loading = this.loadCtrl.create({
      content: 'Sincronizando dados',
      duration: 700,
      spinner: 'crescent'
    });
    loading.present();
    this.confirmationToast();
    console.log("hoje não");
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
