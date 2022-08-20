import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `,
})
export class ParentComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
    console.log(this.ads);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
