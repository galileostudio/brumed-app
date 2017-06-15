import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OccurrenceAddPage } from './occurrence-add';

@NgModule({
  declarations: [
    OccurrenceAddPage,
  ],
  imports: [
    IonicPageModule.forChild(OccurrenceAddPage),
  ],
  exports: [
    OccurrenceAddPage
  ]
})
export class OccurrenceAddPageModule {}
