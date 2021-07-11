import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
    public appPages = [
      { title: 'Home', url: '/home', icon: 'Home' },
      { title: 'Rides', url: '/rides', icon: 'bicycle' },
      { title: 'Discounts', url: 'discount', icon: 'nuclear' },
      { title: 'Recharge History', url: '/recharge-history', icon: 'refresh' },
      { title: 'Stalls', url: '/stall', icon: 'albums' },
      { title: 'WristBand', url: '/wrist-band', icon: 'color-wand' },
      { title: 'Pay via QR Code', url: '/qr', icon: 'tablet-portrait' },
      { title: 'Info', url: '/info', icon: 'code'}
  ];
  
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
