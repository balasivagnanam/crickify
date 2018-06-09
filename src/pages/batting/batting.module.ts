import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BattingPage } from './batting';

@NgModule({
  declarations: [
    BattingPage,
  ],
  imports: [
    IonicPageModule.forChild(BattingPage),
  ],
})
export class BattingPageModule {}
