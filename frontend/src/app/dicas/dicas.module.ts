import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicasPageRoutingModule } from './dicas-routing.module';

import { DicasPage } from './dicas.page';

import { ToolbarCcrComponent } from '../toolbar-ccr/toolbar-ccr.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicasPageRoutingModule
  ],
  declarations: [
    DicasPage,
    ToolbarCcrComponent
  ]
})
export class DicasPageModule {}
