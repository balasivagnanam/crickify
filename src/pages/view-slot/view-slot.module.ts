import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewSlotPage } from './view-slot';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ViewSlotPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewSlotPage),PipesModule
  ],
})

export class ViewSlotPageModule {}
