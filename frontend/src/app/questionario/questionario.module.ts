import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionarioPageRoutingModule } from './questionario-routing.module';

import { QuestionarioPage } from './questionario.page';

import { BinoModule } from '../bino/bino.module';

import { ToolbarCcrComponent } from '../toolbar-ccr/toolbar-ccr.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionarioPageRoutingModule,
    BinoModule
  ],
  declarations: [
    QuestionarioPage,
    ToolbarCcrComponent
  ]
})
export class QuestionarioPageModule {

  constructor() { }

  ngOnInit() {
  }

}
