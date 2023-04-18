import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateFn, CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  // Rewrite old CanActivate interface with this? or see auth.guard.ts
  CanActivateChildFn(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isAdmin();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAdmin();
  }

  isAdmin(): boolean {
    console.log('isAdmin()');
    const result = this.authService.hasPermission('admin');
    if(!result) {
      this.openSnackBar('Permission failed');
    }
    return result;
  }

  openSnackBar(msg: string): void {
    this.snackBar.open(msg);
  }
}
