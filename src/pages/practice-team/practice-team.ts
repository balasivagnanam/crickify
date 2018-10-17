import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {PracticeService} from '../../providers/practice/practice';

/**
 * Generated class for the PracticeTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practice-team',
  templateUrl: 'practice-team.html',
})
export class PracticeTeamPage {

  practiceId: any;
  responseData: any;

  batting: any = [];
  
  tabsvalues: any = "summary";

  constructor(public navCtrl: NavController, public navParams: NavParams, public practiceService: PracticeService, public loadingController: LoadingController) {
    console.log("passed data",navParams.get('practiceId') );
    this.practiceId = navParams.get('practiceId');
    this.getData(this.practiceId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousPracticeDetailsPage');
  }

  getData(practiceId){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.practiceService.getPracticeTeam(practiceId).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.players);
  
        this.batting = this.responseData.results.players;
     
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
        localStorage.clear();
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      // Error log
    });
  }

}
