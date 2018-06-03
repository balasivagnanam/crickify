import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchAvailabilityPage } from './match-availability';

@NgModule({
  declarations: [
    MatchAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchAvailabilityPage),
  ],
})
export class MatchAvailabilityPageModule {}
