import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchTeamPage } from './match-team';

@NgModule({
  declarations: [
    MatchTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchTeamPage),
  ],
})
export class MatchTeamPageModule {}
