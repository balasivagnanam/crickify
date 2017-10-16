import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousMatchesPage } from './previous-matches';

@NgModule({
  declarations: [
    PreviousMatchesPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousMatchesPage),
  ],
})
export class PreviousMatchesPageModule {}
