import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPlayerExpensePage } from './view-player-expenses';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    ViewPlayerExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPlayerExpensePage),PipesModule
  ],
})
export class ViewPlayerExpensePageModule {}
