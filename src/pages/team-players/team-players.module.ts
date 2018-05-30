import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamPlayersPage } from './team-players';

@NgModule({
  declarations: [
    TeamPlayersPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamPlayersPage),
  ],
})
export class TeamPlayersPageModule {}
