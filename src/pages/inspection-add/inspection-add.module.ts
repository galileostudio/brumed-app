import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspectionAddPage } from './inspection-add';

@NgModule({
  declarations: [
    InspectionAddPage,
  ],
  imports: [
    IonicPageModule.forChild(InspectionAddPage),
  ],
  exports: [
    InspectionAddPage
  ]
})
export class InspectionAddPageModule {}
