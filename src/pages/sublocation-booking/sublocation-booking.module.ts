import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubLocationBookingPage } from './sublocation-booking';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    SubLocationBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(SubLocationBookingPage),PipesModule
  ],
})
export class SubLocationBookingPageModule {}
