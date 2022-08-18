import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { User } from '../models/interface/user.interface';
import { LocalstorageService } from '../utils/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private eService: LocalstorageService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let data: User = this.eService.decryptDataUser();
    switch (this.getConfiguredUrl(route)) {
      case '/login':
        if (_.isUndefined(data)) {
          return true;
        } else {
          this.router.navigate(['/v1']);
          return false;
        }
      default:
        if (_.isUndefined(data)) {
          this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url },
          });
          return false;
        } else {
          return true;
        }
    }
  }

  getConfiguredUrl(route: ActivatedRouteSnapshot): string {
    return (
      '/' +
      route.pathFromRoot
        .filter((v) => v.routeConfig)
        .map((v) => v.routeConfig!.path)
        .join('/')
    );
  }
}
