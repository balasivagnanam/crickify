import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProductPage } from './create-product';
import {MultiImageUploadModule} from "../../components/multi-image-upload/multi-image-upload.module";


@NgModule({
  declarations: [
    CreateProductPage
  ],
  imports: [
    IonicPageModule.forChild(CreateProductPage),MultiImageUploadModule
  ],
})
export class CreateProductPageModule {}
