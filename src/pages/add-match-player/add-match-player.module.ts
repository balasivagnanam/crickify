import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMatchPlayerPage } from './add-match-player';

@NgModule({
  declarations: [
    AddMatchPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMatchPlayerPage),
  ],
})
export class AddMatchPlayerPageModule {}
