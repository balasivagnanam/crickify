import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMatchTeamPage } from './add-match-team';

@NgModule({
  declarations: [
    AddMatchTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMatchTeamPage),
  ],
})
export class AddMatchTeamPageModule {}
