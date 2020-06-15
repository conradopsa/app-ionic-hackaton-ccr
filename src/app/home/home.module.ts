import { GeolocationPageModule } from './../geolocation/geolocation.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { BinoModule } from '../bino/bino.module';

import { ToolbarCcrComponent } from '../toolbar-ccr/toolbar-ccr.component';

import { GridHomeModule } from '../grid-home/grid-home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    BinoModule,
    GeolocationPageModule,
    GridHomeModule
  ],
  declarations: [
    HomePage,
    ToolbarCcrComponent
  ]
})
export class HomePageModule { }
