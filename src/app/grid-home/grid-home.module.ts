import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridHomeComponent } from './grid-home.component';
import { GridHomeContentComponent } from './grid-home-content/grid-home-content.component'


@NgModule({
  declarations: [
    GridHomeComponent,    
    GridHomeContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridHomeComponent
  ]
})
export class GridHomeModule { }
