import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTeamExpensePage } from './add-team-expense';

@NgModule({
  declarations: [
    AddTeamExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(AddTeamExpensePage),
  ],
})
export class AddTeamExpensePageModule {}
