import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicasPage } from './dicas.page';

const routes: Routes = [
  {
    path: '',
    component: DicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicasPageRoutingModule {}
