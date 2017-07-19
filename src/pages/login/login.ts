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
  

  constructor(public menu: MenuController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public app: App, private platform: Platform) {
    //this.menu.enable(false);
        
    platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need

          platform.registerBackButtonAction(() => {
            if(this.menu.isOpen()){
               this.menu.close()
            } 
            else if(this.navCtrl.canGoBack()){
              this.doConfirm();
              console.log("back apertado!");
            }else{
              //don't do anything
            }
          });
        });

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

  doConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Sair?',
      message: 'Você deseja mesmo sair do aplicativo?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sair',
          handler: () => {
            this.platform.exitApp();
            console.log('Agree clicked');
          }
        }
      ]
    });

    alert.present();
  }

  goToSignup() {
    // this.navCtrl.push(SignupPage);
  }

  goToResetPassword() {
    this.navCtrl.push(RecoverPwdPage);
  }

}
