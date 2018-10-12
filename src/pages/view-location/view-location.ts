import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,AlertController,Platform} from 'ionic-angular';
import {TeamService} from '../../providers/teams/teams';
import {OtherService} from '../../providers/other/other';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SubLocationService } from '../../providers/sublocation/sublocation';
/**
 * Generated class for the CreatedTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-view-location',
  templateUrl: 'view-location.html',
})

export class ViewLocationPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  location : any;
  sublocations : any;
  locationresponseData:any;
  constructor(public navCtrl: NavController,public platform: Platform,public sublocationService:SubLocationService,public alertController: AlertController, public navParams: NavParams, public teamService: TeamService, public loadingController: LoadingController,formBuilder: FormBuilder,public otherService: OtherService) {
    this.location = navParams.get('location');
    
this.getData();
platform.ready().then(() => {
  this.loadMap();
});
  }

  loadMap(){
    let addMarker=false;
    let zoom=11;
    let latLng = new google.maps.LatLng(1.3143394,103.7041612);
    if(this.location.lat!=0&&this.location.lng!=0){
     latLng = new google.maps.LatLng(this.location.lat, this.location.lng);
     addMarker=true;
     zoom=17;
    }
    let mapOptions = {
      center: latLng,
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    if(addMarker){
 this.addMarker();
    }
  }

  addMarker(){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
   
    let content ="<h2>"+this.location.name+"</h2><p>"+ "<h4>"+this.location.address+"</h4><p>";         
   
    this.addInfoWindow(marker, content);
   
  }

  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }
  getData(){
    if(this.location!=null&&this.location.id!=null){
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.sublocationService.getAllSubLocation(this.location.id).then((result) => {
      this.locationresponseData = result;
      console.log(this.locationresponseData); 
      if (this.locationresponseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.locationresponseData.results.result);
        this.sublocations = this.locationresponseData.results.result;
       
      }  else if(this.locationresponseData.statusCode == "404") {
        loading.dismiss();
      } else {
        loading.dismiss();
        console.log("error", this.locationresponseData)
      }
      
    }, (err) => {
      loading.dismiss();
    });
  }
  }
  ionViewDidLoad() {

  }

  
}
