import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScaMatchesPage } from './sca-matches';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    ScaMatchesPage,
  ],
  imports: [
    IonicPageModule.forChild( ScaMatchesPage),PipesModule
  ],
})
export class ScaMatchesPageModule {}
