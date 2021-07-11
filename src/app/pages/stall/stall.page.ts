import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Data } from '@angular/router';
@Component({
  selector: 'app-stall',
  templateUrl: './stall.page.html',
  styleUrls: ['./stall.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StallPage  {

  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'Name' },
      { name: 'Description' },
      { name: 'Status' }
    ];

    this.http.get<Data>('../../assets/stalls.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.stalls;
      });
  }
}