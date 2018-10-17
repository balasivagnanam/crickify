import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPracticeTeamPage } from './add-practice-team';

@NgModule({
  declarations: [
    AddPracticeTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPracticeTeamPage),
  ],
})
export class AddPracticeTeamPageModule {}
