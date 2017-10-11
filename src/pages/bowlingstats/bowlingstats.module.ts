import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BowlingstatsPage } from './bowlingstats';

@NgModule({
  declarations: [
    BowlingstatsPage,
  ],
  imports: [
    IonicPageModule.forChild(BowlingstatsPage),
  ],
})
export class BowlingstatsPageModule {}
