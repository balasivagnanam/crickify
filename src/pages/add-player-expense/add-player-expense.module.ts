import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlayerExpensePage } from './add-player-expense';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    AddPlayerExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlayerExpensePage),PipesModule
  ],
})
export class AddPlayerExpensePageModule {}
