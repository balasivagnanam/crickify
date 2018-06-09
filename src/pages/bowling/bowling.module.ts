import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BowlingPage } from './bowling';

@NgModule({
  declarations: [
    BowlingPage,
  ],
  imports: [
    IonicPageModule.forChild(BowlingPage),
  ],
})
export class BowlingPageModule {}
