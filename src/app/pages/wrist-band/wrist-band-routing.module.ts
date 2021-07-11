import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WristBandPage } from './wrist-band.page';

const routes: Routes = [
  {
    path: '',
    component: WristBandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WristBandPageRoutingModule {}
