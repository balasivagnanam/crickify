import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewsPage } from './create-news';
import {MultiImageUpload} from "../../components/multi-image-upload/multi-image-upload";


@NgModule({
  declarations: [
    CreateNewsPage,MultiImageUpload
  ],
  imports: [
    IonicPageModule.forChild(CreateNewsPage),
  ],
})
export class CreateNewsPageModule {}
