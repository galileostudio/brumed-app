import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegulationAddPage } from './regulation-add';

@NgModule({
  declarations: [
    RegulationAddPage,
  ],
  imports: [
    IonicPageModule.forChild(RegulationAddPage),
  ],
  exports: [
    RegulationAddPage
  ]
})
export class RegulationAddPageModule {}
