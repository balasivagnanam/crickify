import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BattingstatsPage } from './battingstats';

@NgModule({
  declarations: [
    BattingstatsPage,
  ],
  imports: [
    IonicPageModule.forChild(BattingstatsPage),
  ],
})
export class BattingstatsPageModule {}
