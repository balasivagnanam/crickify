import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModeChangePage } from './modeChange';

@NgModule({
  declarations: [
    ModeChangePage,
  ],
  imports: [
    IonicPageModule.forChild(ModeChangePage),
  ],
})
export class ModeChangeModule {}
