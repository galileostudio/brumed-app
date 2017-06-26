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
import { OccurrencePage } from './../pages/occurrence/occurrence';
import { OccurrenceAddPage } from './../pages/occurrence-add/occurrence-add';
import { RecoverPwdPage } from './../pages/recover-pwd/recover-pwd';
import { SyncPage } from './../pages/sync/sync';
import { ProfilePage } from './../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { CameraProvider } from '../providers/camera/camera.provider';
import { ExpandableHeader } from '../components/expandable-header/expandable-header';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CompanyPage,
    CompanyAddPage,
    InspectionPage,
    InspectionAddPage,
    LoginPage,
    OccurrencePage,
    OccurrenceAddPage,
    RecoverPwdPage,
    SyncPage,
    ProfilePage,
    ExpandableHeader
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
    LoginPage,
    OccurrencePage,
    OccurrenceAddPage,
    RecoverPwdPage,
    SyncPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CameraProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CameraProvider
  ],
  exports: [
    ExpandableHeader
  ]
})
export class AppModule {}
