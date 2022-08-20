import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {
        name: 'Bombastos',
        bio: 'Brave as they comes',
      }),
      new AdItem(HeroProfileComponent, {
        name: 'Dr IQs',
        bio: 'Smart as they comes',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Hiring for several positionss',
        body: 'Submit your resume today!s',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Openings in all departmentss',
        body: 'Apply todays',
      }),
    ];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
