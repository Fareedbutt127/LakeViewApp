import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeHistoryPageRoutingModule } from './recharge-history-routing.module';

import { RechargeHistoryPage } from './recharge-history.page';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargeHistoryPageRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
  ],
  declarations: [RechargeHistoryPage]
})
export class RechargeHistoryPageModule {}
