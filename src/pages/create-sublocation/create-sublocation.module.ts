import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSubLocationPage } from './create-sublocation';


@NgModule({
  declarations: [
    CreateSubLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSubLocationPage),
  ],
})
export class CreateSubLocationModule {}
