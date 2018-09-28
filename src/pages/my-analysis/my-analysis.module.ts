import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAnalysisPage } from './my-analysis';

@NgModule({
  declarations: [
    MyAnalysisPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAnalysisPage),
  ],
})
export class MyAnalysisPageModule {}
