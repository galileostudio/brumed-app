import { AppMaskerModule } from 'brmasker-ionic';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyAddPage } from './company-add';

@NgModule({
  declarations: [
    CompanyAddPage,
    AppMaskerModule 
  ],
  imports: [
    IonicPageModule.forChild(CompanyAddPage),
    AppMaskerModule
  ],
  exports: [
    CompanyAddPage
  ]
})
export class CompanyAddPageModule {}
