import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PracticeAvailabilityPage } from './practice-availability';

@NgModule({
  declarations: [
    PracticeAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(PracticeAvailabilityPage),
  ],
})
export class PracticeAvailabilityPageModule {}
