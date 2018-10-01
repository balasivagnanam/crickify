import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,AlertController} from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {OtherService} from '../../providers/other/other';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-sublocation',
  templateUrl: 'view-sublocation.html',
})
export class ViewSubLocationPage {



  location : any;

  constructor(public navCtrl: NavController,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: OtherService) {
    this.location = navParams.get('location');
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad create team');
  }

  
}
