import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { AuthService} from '../../providers/auth/auth';
import { ProductService } from '../../providers/product/product';
import {MatchTeamPage} from '../match-team/match-team';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { PipesModule } from '../../pipes/pipes.module';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {TeamService} from '../../providers/teams/teams';

import {OtherService} from '../../providers/other/other';
import { CreateProductPage } from '../create-product/create-product';
import { ViewProductPage } from '../viewproduct/viewproduct';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})

export class ProductPage {

  userDetails : any;
  responseData: any;
  teamresponseData: any;
  tournamentresponseData: any;
 
  userPostData = {"user_id":"","token":""};
  private searchProductForm: FormGroup;
 
  teams:any;
products : any;

  constructor(public navCtrl: NavController, public app:App, formBuilder: FormBuilder,public teamService:TeamService,public otherService:OtherService, public authService:AuthService, public productService:ProductService, public loadingController: LoadingController,public admob: AdMobFree) {
    if (this.authService.getAuthenticated()){
      const data = JSON.parse(localStorage.getItem('userData'));
      console.log("fetch data", data);
      this.userDetails = data;
     // console.log("user data from storage", this.userDetails)
      this.userPostData.user_id = this.userDetails.id;
      this.userPostData.token = this.userDetails.token;
    }
    
    
    this.searchProductForm = formBuilder.group({

      startDate: [],
      endDate: [],
      title: []
      
    });

  }

  addProduct(){
              
    this.navCtrl.push(CreateProductPage);
}

editProduct(product){
this.navCtrl.push(CreateProductPage,{product: product});

}
viewProduct(product){
  this.navCtrl.push(ViewProductPage,{product: product});
  
  }
  deleteProduct(product) {
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    product.active=false;
    this.productService.addProduct(product).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData.statusCode == '200') {
        loading.dismiss();
        console.log("test 200");

      this.ionViewDidLoad();
      } else if (this.responseData.statusCode == "404") {
        loading.dismiss();
        console.log("unauthorrised");
        
      } else {
        loading.dismiss();
        console.log("test others");
      
      }

    }, (err) => {
      console.log("error", err);
      loading.dismiss();
     
      // Error log
    });
  }

  ionViewWillEnter(){

    this.ionViewDidLoad();
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad home page');
  
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.productService.getAllProductSearch(this.searchProductForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.products = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "404") {
        console.log("unauthorrised");
		loading.dismiss();
   
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

    
  }
  
  
 
 

  

  search(){
    console.log('ionViewDidLoad home page');
    const loading = this.loadingController.create({
      content: 'Please wait...'
    });
    loading.present();
    this.productService.getAllProductSearch(this.searchProductForm.value).then((result) => {
      this.responseData = result;
      console.log(this.responseData); 
      if (this.responseData.statusCode == '200'){
        loading.dismiss();
        console.log("test 200");
        console.log("result", this.responseData.results.result);
        this.products = this.responseData.results.result;
      }  else if(this.responseData.statusCode == "403") {
        console.log("unauthorrised");
		loading.dismiss();
       
      } else {
        loading.dismiss();
        console.log("error", this.responseData)
      }
      
    }, (err) => {
		loading.dismiss();
      // Error log
    });

  }
}
