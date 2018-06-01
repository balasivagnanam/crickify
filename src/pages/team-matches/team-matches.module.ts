import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamMatchesPage } from './team-matches';

@NgModule({
  declarations: [
     TeamMatchesPage,
  ],
  imports: [
    IonicPageModule.forChild( TeamMatchesPage),
  ],
})
export class TeamMatchesPageModule {}
