import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StallPage } from './stall.page';

const routes: Routes = [
  {
    path: '',
    component: StallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StallPageRoutingModule {}
