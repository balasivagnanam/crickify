import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform
  ) {}

  async getToken() {

    let token;
  
    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
    } 
  
    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    } 
    
    return this.saveTokenToFirestore(token)
  }

  private saveTokenToFirestore(token) {
    if (!token) return;
    localStorage.setItem('notificationtoken', JSON.stringify(token));
    const devicesRef = this.afs.collection('devices')
  
    const docData = { 
      token,
      userId: 'testUser',
    }
  
    return devicesRef.doc(token).set(docData)
  }

  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }

}