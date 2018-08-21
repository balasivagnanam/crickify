import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamPracticePage } from './team-practice';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    TeamPracticePage,
  ],
  imports: [
    IonicPageModule.forChild( TeamPracticePage),PipesModule
  ],
})
export class TeamPracticePageModule {}
