import { Component, OnInit } from '@angular/core';
import { Plugins, GeolocationPosition } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  public Latitude: any = 0;
  Longitude: any = 0;
  Accuracy: any = 0;
  AltitudeAccuracy: any = 0;
  Altitude: any = 0;
  Speed: any = 0;
  Heading: any = 0;

  constructor() {
  }

  ngOnInit() {
    this.getCurrentPosition();
  }

  public async getCurrentPosition() {
     const coordinates = await Geolocation.getCurrentPosition();
     this.Latitude = coordinates.coords.latitude;
     this.Longitude = coordinates.coords.longitude;
     this.Accuracy = coordinates.coords.accuracy;
     this.AltitudeAccuracy = coordinates.coords.altitudeAccuracy ?? 0;
     this.Altitude = coordinates.coords.altitude  ?? 0;
     this.Speed = coordinates.coords.speed  ?? 0;
     this.Heading = coordinates.coords.heading ?? 0;
   }
    public watchPosition() {
     const wait = Geolocation.watchPosition({}, (position, err) => {
     })
   }
}
