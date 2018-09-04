import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
 
@Injectable()
export class ImagesProvider {
  apiURL = 'https://crickify.herokuapp.com/file';
  public serverUrl = "https://crickify.herokuapp.com/image/";
 
  constructor(public http: Http, private transfer: FileTransfer) { }
 
  getImages() {
    return this.http.get(this.apiURL + 'images').map(res => res.json());
  }
 
  deleteImage(img) {
    return this.http.delete(this.apiURL + 'images/' + img._id);
  }
  getToken(){
      return JSON.parse(localStorage.getItem('userData')).user.token;
  }
 
  uploadImage(img) {
 
    // Destination URL
    let url = this.apiURL + '/api/user/upload';
 
    // File for Upload
    var targetPath = img;
     let headers = new Headers();
     headers.set("token",this.getToken());
    var options: FileUploadOptions = {
      fileKey: 'file',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
     headers: {'token':this.getToken()}
    };
 
    const fileTransfer: FileTransferObject = this.transfer.create();
 
    // Use the FileTransfer to upload the image
    return fileTransfer.upload(targetPath, url, options);
  }
 
  uploadCloudinaryImage(img,type,id) {
 
    // Destination URL
    let url = this.serverUrl + type+'/image/'+id;
 
    // File for Upload
    var targetPath = img;
     let headers = new Headers();
     headers.set("token",this.getToken());
    var options: FileUploadOptions = {
      fileKey: 'upload',
      chunkedMode: false,
      mimeType: 'multipart/form-data',
     headers: {'token':this.getToken()}
    };
 
    const fileTransfer: FileTransferObject = this.transfer.create();
 
    // Use the FileTransfer to upload the image
    return fileTransfer.upload(targetPath, url, options);
  }
}