import { LoginPage } from './../pages/login/login';
import { UserService } from './../domain/user/user-service';
import { User } from './../domain/user/user';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { CompanyPage } from '../pages/company/company';
import { SyncPage } from './../pages/sync/sync';
import { ProfilePage } from './../pages/profile/profile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = CompanyPage;

  pages: Array<{title: string, component: any, icon: string}>;

  icons: Array<{icon: string}>;

  iconTest = "assets/img/icon/power.png";

  _loggedUser: any;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, _userService: UserService) {

    this.rootPage = _userService.isLogged() ?  CompanyPage : LoginPage;
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this._loggedUser = _userService.userLogged();

    });
    //this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: CompanyPage, icon: this.iconTest},
      { title: 'Sincronizar dados', component: SyncPage, icon: this.iconTest},
      { title: 'Sobre', component: AboutPage, icon: this.iconTest},
    ];
  }

  // initializeApp() {
  //   this._loggedUser =  _userServices
  // }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openHome(){
    this.nav.setRoot(CompanyPage);
  }
  openSync(){
    this.nav.setRoot(SyncPage);
  }
  openAbout(){
    this.nav.setRoot(AboutPage);
  }
  openProfile(){
    this.nav.setRoot(ProfilePage);
  }
  btnSair(){
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }
}
