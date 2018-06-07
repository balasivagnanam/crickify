import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousMatchDetailsEditPage } from './previous-match-details-edit';

@NgModule({
  declarations: [
    PreviousMatchDetailsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousMatchDetailsEditPage),
  ],
})
export class PreviousMatchDetailsEditPageModule {}
