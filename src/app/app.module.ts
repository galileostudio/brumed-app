import { AppMaskerModule } from 'brmasker-ionic';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { CompanyPage } from '../pages/company/company';
import { CompanyAddPage } from '../pages/company-add/company-add';
import { InspectionPage } from './../pages/inspection/inspection';
import { InspectionAddPage } from "./../pages/inspection-add/inspection-add";
import { LoginPage } from './../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CompanyPage,
    CompanyAddPage,
    InspectionPage,
    InspectionAddPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AppMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CompanyPage,
    CompanyAddPage,
    InspectionPage,
    InspectionAddPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
