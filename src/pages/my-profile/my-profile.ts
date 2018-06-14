import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {PlayersProvider} from '../../providers/players/players';
import {AuthService} from '../../providers/auth/auth';
import {TeamService} from '../../providers/teams/teams';
import {BattingService} from '../../providers/batting/batting';
import { Chart } from 'chart.js';
/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  tabsvalues : String = "batting";
@ViewChild('barCanvas') barCanvas;
 @ViewChild('doughnutCanvas') doughnutCanvas;
    barChart: any;
   doughnutChart: any;
  userDetails : any;
  responseData: any;
 statsresponseData: any;
  battingresponseData: any;
  dismissalresponseData: any;
  userPostData = {"user_id":"","token":""};
  playerStats : any = " ";
  battingStats : any = "";
  bowlingStats : any = "";
  teams: any = "";
  teamSelectedIndex: any;
  statsArray: any = [];
  selectedTeam: any;
lastbattings:any= [];
dismissalstats= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public battingService: BattingService,public playersService: PlayersProvider, public loadingController:LoadingController, public authService:AuthService, public teamService: TeamService) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
      this.getData();
    }
  }

  getData(){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    
    loading.present();
  //   this.playersService.getPlayerStats().then((result) => {
  //     this.responseData = result;
  //     console.log(this.responseData); 
  //     if (this.responseData.statusCode == '200'){
  //       loading.dismiss();
  //       console.log("test 200");
  //       console.log("result", this.responseData.results.Stats);
  //       this.playerStats = this.responseData.results.Stats;
  //       this.battingStats = this.responseData.results.Stats.battingStatistics;
  //       this.bowlingStats = this.responseData.results.Stats.bowlingStatistics;

  //     }  else if(this.responseData.statusCode == "404") {
  //       console.log("unauthorrised");
  //       localStorage.clear();
  //     } else {
  //       loading.dismiss();
  //       console.log("error", this.responseData)
  //     }
  // });

  this.teamService.getAllTeams().then((result) => {
    this.responseData = result;
    console.log(this.responseData); 
    if (this.responseData.statusCode == '200'){
      loading.dismiss();
      console.log("test 200");
      this.teams = this.responseData.results.teams;
      this.selectedTeam = this.responseData.results.teams[0];
      this.teamSelected(this.responseData.results.teams[0]);
      console.log("result teams", JSON.stringify(this.responseData.results));
    }  else if(this.responseData.statusCode == "404") {
      console.log("unauthorrised");
      localStorage.clear();
    //  this.backToWelcome();
    } else {
      loading.dismiss();
      console.log("error", this.responseData)
    }
    
  }, (err) => {
    // Error log
  });
  }

  ionViewDidLoad() {
    
    this.getLastBatting(this.lastbattings);
  }


  teamSelected(team){
    console.log("selected team", team);
    console.log("team id", team.id);
    this.getStats(team);
  }

  changeMenus(index:number)
  {
      this.teamSelectedIndex =index;
  }

  getStats(team){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    this.statsArray = [];
    this.playersService.getPlayerTournamentStats(team.id).then((result) => {
      this.statsresponseData = result;
      console.log(this.statsresponseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("stats test 200");
        if(this.statsresponseData.results.stats.length == 0){

        } else {
          this.statsArray = this.statsresponseData.results.stats;
          console.log("result", this.statsresponseData.results.stats);
         // console.log("arrary", JSON.parse(this.statsArray));
        }
        
      }  else if(this.statsresponseData.statusCode == "404") {
   loading.dismiss();
      //  this.backToWelcome();
      } else {
        loading.dismiss();
       
      }
      
    }, (err) => {
       loading.dismiss();
    });
    
    this.battingService.getLastBattings(this.userDetails.user.id).then((result) => {
      this.battingresponseData = result;
 
      if (this.responseData.statusCode == '200'){
        this.lastbattings=this.battingresponseData.results.battings;
        this.getLastBatting(this.battingresponseData.results.battings);
      
        
      }  else if(this.battingresponseData.statusCode == "404") {
   
      //  this.backToWelcome();
      } else {
        
        console.log("error", this.battingresponseData)
      }
      
    }, (err) => {
      
    });
    
      this.battingService.getDismissalstats(this.userDetails.user.id).then((result) => {
      this.dismissalresponseData = result;
 
      if (this.responseData.statusCode == '200'){
        this.dismissalstats=this.dismissalresponseData.results.dismisals;
        this.getDismissalstats(this.dismissalresponseData.results.dismisals);
      
        
      }  else if(this.dismissalresponseData.statusCode == "404") {
   
      //  this.backToWelcome();
      } else {
        
        console.log("error", this.dismissalresponseData)
      }
      
    }, (err) => {
      
    });
  }

  getDismissalstats(dismissals){
     var label = [];
    var value = [];
    var count=0;
    if(dismissals.length>10){
      count=10;}
    else{
      count=dismissals.length;}
for (let i = 1; i < count; i++) {
  
    label.push(dismissals[i].name);
  value.push(dismissals[i].count);
}
   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels:label,
                datasets: [{
                    label: '# of dismissals',
                    data: value,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        });
  
  }
  getLastBatting(battings){
    
    var label = [];
    var value = [];
    var count=0;
    if(battings.length>10){
      count=10;}
    else{
      count=battings.length;}
for (let i = 1; i < count; i++) {
  
    label.push(battings[i].match.opponent);
  value.push(battings[i].run);
}
   this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                    label: '# of runs',
                    data: value,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                    
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
  
  }
}
