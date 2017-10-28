import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousMatchDetailsPage } from './previous-match-details';

@NgModule({
  declarations: [
    PreviousMatchDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousMatchDetailsPage),
  ],
})
export class PreviousMatchDetailsPageModule {}
