import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePracticePage } from './create-practice';


@NgModule({
  declarations: [
    CreatePracticePage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePracticePage),
  ],
})
export class CreatePracticeModule {}
