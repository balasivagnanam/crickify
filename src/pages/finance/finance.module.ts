import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancePage } from './finance';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    FinancePage,
  ],
  imports: [
    IonicPageModule.forChild(FinancePage),PipesModule
  ],
})
export class FinancePageModule {}
