import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinoComponent } from './bino.component';

@NgModule({
  declarations: [
    BinoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BinoComponent
  ]
})
export class BinoModule { }
