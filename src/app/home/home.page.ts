import { Platform } from '@ionic/angular';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  public bgcolor: string = 'whrite';
  matches: Array<string> = [];
  isSpeechAvailable = false;
  isListening = false;
  ttsText: any = "";

  constructor(private platform: Platform, public speechRecognition: SpeechRecognition, 
              private changeDetectorRef: ChangeDetectorRef, public tts: TextToSpeech) { 
    platform.ready().then(() => {
        this.speechRecognition.isRecognitionAvailable()
        .then((available: boolean) => this.isSpeechAvailable = available)
    });
  }

  public startListening(): void{
    this.isListening = true;
    this.matches = [];
    this.speechRecognition.startListening({
      language: 'pt-BR',
      matches: 5,
      prompt: 'Olá Caminhoneiro!',
      showPopup: true,
      showPartial: false
   })
      .subscribe(
        (matches: string[]) => {
          this.isListening = false;
          this.matches = matches;
          console.log(this.matches);
          this.bgcolor = matches[0];
          console.log(this.bgcolor);
          this.changeDetectorRef.detectChanges();
          this.stopListening();
        },
        (onerror) => {
          this.isListening = false;
          this.changeDetectorRef.detectChanges();
          console.log('errei' + onerror);
        }
    )
  }

  public stopListening(): void{
    this.speechRecognition.stopListening();
  }
  
  public TestTTS(){
    this.tts.speak({text: this.ttsText, locale: 'pt-BR', rate: 1});
  }

  // ngOnInit() {
  //    this.spreechRecognition.hasPermission()
  //    .then((hasPermission: boolean) => {
  //      if(!hasPermission){
  //        this.spreechRecognition.requestPermission();
  //      }
  //    });
  // }

  

//   start(){
//     let options = {
//       language = 'es-US',
//       matches = 5,
//       prompt = 'teste options',
//       showPopup = true,
//       showPartial = false
//     };
//     this.spreechRecognition.startListening(options)
//     .subscribe(
//       (matches: Array<string>) => {
//         this.bgcolor = matches[1];
//         this.changeDetectorRef.detectChanges();
//       }
//     );
//   }
// }
}
