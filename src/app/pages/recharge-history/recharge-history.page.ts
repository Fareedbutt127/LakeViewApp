import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-recharge-history',
  templateUrl: './recharge-history.page.html',
  styleUrls: ['./recharge-history.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RechargeHistoryPage {

  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'Date' },
      { name: 'Payment' },
      { name: 'Amount' }
    ];

    this.http.get<Data>('../../assets/history.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.history;
      });
  }
}
