import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspectionModalPage } from './inspection-modal';

@NgModule({
  declarations: [
    InspectionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(InspectionModalPage),
  ],
  exports: [
    InspectionModalPage
  ]
})
export class InspectionModalPageModule {}
