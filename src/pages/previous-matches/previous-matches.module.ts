import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousMatchesPage } from './previous-matches';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    PreviousMatchesPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousMatchesPage),PipesModule
  ],
})
export class PreviousMatchesPageModule {}
