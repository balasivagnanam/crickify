import { Component } from '@angular/core';
import { NavController, NavParams, App,LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
//import { MatchService } from '../../providers/matches/matches';
import { StatsService } from '../../providers/stats/stats';
import {TeamService} from '../../providers/teams/teams';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'page-teamstats',
  templateUrl: 'teamstats.html'
})
export class TeamStatsPage {
  userDetails : any;
  responseData: any;
  tabsvalues : String = "team";
  selectedTeam: any;
  private searchForm: FormGroup;
  teams : any;
  stat: any;
  allStats: any;
team:any;
  //selectedTeam : any;


 
  userPostData = {"user_id":"","token":""};

  constructor(public navCtrl: NavController,formBuilder: FormBuilder, public navParams: NavParams, public authService:AuthService, public teamService:TeamService, public statsService:StatsService, public app: App, public loadingController:LoadingController) {
    this.team = JSON.parse(localStorage.getItem('team'));
    this.searchForm = formBuilder.group({
      endDate: ['', Validators.compose([ Validators.required])],
      startDate: ['', Validators.compose([ Validators.required])]
  
    });
    
  }

  ionViewDidLoad(){
    
  }

  


  changeMenus(index:number)
  {
      this.selectedTeam=index;
  }

  search(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    
    this.statsService.getTeamStatistics(this.team.id,this.searchForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("stats test 200");

          this.stat = this.responseData.results.statistics;
          console.log("result", this.responseData.results.statistics);
         // console.log("arrary", JSON.parse(this.statsArray));
        
        
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }


}
