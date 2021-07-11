import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StallPageRoutingModule } from './stall-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { StallPage } from './stall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StallPageRoutingModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  declarations: [StallPage]
})
export class StallPageModule {}
