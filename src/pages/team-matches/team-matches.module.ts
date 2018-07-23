import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamMatchesPage } from './team-matches';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
     TeamMatchesPage,
  ],
  imports: [
    IonicPageModule.forChild( TeamMatchesPage),PipesModule
  ],
})
export class TeamMatchesPageModule {}
