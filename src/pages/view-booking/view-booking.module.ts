import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBookingPage } from './view-booking';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ViewBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBookingPage),PipesModule
  ],
})
export class ViewBookingPageModule {}
