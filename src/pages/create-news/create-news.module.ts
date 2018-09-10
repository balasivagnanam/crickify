import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewsPage } from './create-news';
import {MultiImageUploadModule} from "../../components/multi-image-upload/multi-image-upload.module";


@NgModule({
  declarations: [
    CreateNewsPage
  ],
  imports: [
    IonicPageModule.forChild(CreateNewsPage),MultiImageUploadModule
  ],
})
export class CreateNewsPageModule {}
