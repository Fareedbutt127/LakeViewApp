import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WristBandPageRoutingModule } from './wrist-band-routing.module';

import { WristBandPage } from './wrist-band.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WristBandPageRoutingModule
  ],
  declarations: [WristBandPage]
})
export class WristBandPageModule {}
