import { RecoverPwdPage } from './../recover-pwd/recover-pwd';
import { Component } from '@angular/core';
import { AlertController, App, LoadingController, IonicPage, NavController, NavParams, MenuController, Platform } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;
  public backgroundImage = "assets/img/background/Bg.png";
  //public validation: boolean;
  

  constructor(public menu: MenuController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public app: App, private platform: Platform) {
    //this.menu.enable(false);

}
isValid(){
  return true;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    let loading = this.loadingCtrl.create({
      content:'Entrando...',
      duration: 500,
      spinner: 'crescent'
    });
    loading.present();
    this.navCtrl.pop();

    /*loading.onDidDismiss(() => {
      let alert = this.alertCtrl.create({
        title: 'Usuário ou Senha incorreta!',
        subTitle: 'Verifique seu usuário ou senhas',
        buttons: ['Ok']
      });
      alert.present();
    }); */
  }
  ionViewCanLeave(): boolean{
   // here we can either return true or false
   // depending on if we want to leave this view
   if(this.isValid()== true){
      return true;
    } else {
      return false;
    }
  }

  goToResetPassword() {
    this.navCtrl.push(RecoverPwdPage);
  }

}
