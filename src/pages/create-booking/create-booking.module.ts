import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBookingPage } from './create-booking';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CreateBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateBookingPage),PipesModule
  ],
})
export class CreateBookingPageModule {}
