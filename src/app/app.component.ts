import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private speechRecognition: SpeechRecognition
  ) {
      this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        console.log('vocale?' + hasPermission);

        if(!hasPermission){
            this.requestSpeechRecognitionPermission();
        }
      })
  });
}

  private requestSpeechRecognitionPermission(): void{
    this.speechRecognition.requestPermission()
      .then(
        () => console.log('Granted'),
        () => console.log('Denied')
      )
  }

  // initializeApp() {

  //   });
  // }
}

