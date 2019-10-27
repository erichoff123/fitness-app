import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Workout',
      url: '/list',
      icon: 'fitness'
    },
    {
      title: 'Fitness Plans',
      url: '/plans',
      icon: 'clipboard'
    },
    {
      title: 'Workout Timer',
      url: '/timer',
      icon: 'timer'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyD5a0zehaiVeL3gTCmreJu9h2v9pKp6TFw",
      authDomain: "fitness-tracker-667e0.firebaseapp.com",
      databaseURL: "https://fitness-tracker-667e0.firebaseio.com",
      projectId: "fitness-tracker-667e0",
      storageBucket: "fitness-tracker-667e0.appspot.com",
      messagingSenderId: "248415980206",
      appId: "1:248415980206:web:d5386589ae2c804ec8fb3f",
      measurementId: "G-G9PFNVMFTP"
    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    firebase.auth().signOut();
    this.menu.close();
  }
}