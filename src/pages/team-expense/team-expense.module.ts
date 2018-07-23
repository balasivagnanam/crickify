import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamExpensePage } from './team-expense';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    TeamExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(TeamExpensePage),PipesModule
  ],
})
export class TeamExpensePageModule {}
