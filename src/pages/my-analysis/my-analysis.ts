import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {PlayersProvider} from '../../providers/players/players';
import {AuthService} from '../../providers/auth/auth';
import {StatsService} from '../../providers/stats/stats';
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
  selector: 'page-my-analysis',
  templateUrl: 'my-analysis.html',
})
export class MyAnalysisPage {

  tabsvalues : String = "batting";
@ViewChild('barCanvas') barCanvas;
 @ViewChild('doughnutCanvas') doughnutCanvas;
    barChart: any;
   doughnutChart: any;
  userDetails : any;
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public statsService: StatsService,public battingService: BattingService,public playersService: PlayersProvider, public loadingController:LoadingController, public authService:AuthService, public teamService: TeamService) {
   
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
      this.getStats();
    
  }


  ionViewDidLoad() {
    
    
  }





  getStats(){
    
    this.battingService.getLastBattings(this.userDetails.user.id).then((result) => {
      this.battingresponseData = result;
 
      if (this.battingresponseData.statusCode == '200'){
        this.lastbattings=this.battingresponseData.results.battings;
        this.getLastBatting(this.battingresponseData.results.battings);
      
        
      } else {
        
        console.log("error", this.battingresponseData)
      }
      
    }, (err) => {
      
    });
    
      this.battingService.getDismissalstats(this.userDetails.user.id).then((result) => {
      this.dismissalresponseData = result;
 
      if (this.dismissalresponseData.statusCode == '200'){
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
for (let i = 0; i <count; i++) {
  
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
    if(battings.length>5){
      count=5;}
    else{
      count=battings.length;}
for (let i = 0; i <count; i++) {
  
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
