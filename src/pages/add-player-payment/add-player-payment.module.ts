import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlayerPaymentPage } from './add-player-payment';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    AddPlayerPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlayerPaymentPage),PipesModule
  ],
})
export class AddPlayerPaymentPageModule {}
