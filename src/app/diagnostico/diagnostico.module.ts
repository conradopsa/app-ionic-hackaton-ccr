import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BinoModule } from '../bino/bino.module';

import { IonicModule } from '@ionic/angular';

import { DiagnosticoPageRoutingModule } from './diagnostico-routing.module';

import { DiagnosticoPage } from './diagnostico.page';

import { ToolbarCcrComponent } from '../toolbar-ccr/toolbar-ccr.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticoPageRoutingModule,
    BinoModule
  ],
  declarations: [
    DiagnosticoPage,
    ToolbarCcrComponent
  ]
})
export class DiagnosticoPageModule {}
