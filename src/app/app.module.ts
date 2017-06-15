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
import { OccurrencePage } from './../pages/occurrence/occurrence';
import { OccurrenceAddPage } from './../pages/occurrence-add/occurrence-add';


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
    OccurrencePage,
    OccurrenceAddPage
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
    OccurrencePage,
    OccurrenceAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
