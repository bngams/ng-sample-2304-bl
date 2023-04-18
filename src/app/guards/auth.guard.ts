import { Injector } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

// globl authService 
const authService = Injector.create({providers: [{provide: AuthService, deps: []}]}).get(AuthService);

export const ProductGuard: CanActivateChildFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // authService => isLoggedIn => DI (but not in class so dynamically)
    // create an injector able to inject authService

    // multiple lines
    // const injector = Injector.create({providers: [{provide: AuthService, deps: []}]});
    // const authService = injector.get(AuthService);

    // one liner
    // const authService = Injector.create({providers: [{provide: AuthService, deps: []}]}).get(AuthService);

    return isAdmin();
    // https://angular.io/api/router/UrlTree
};


const isAdmin = () => {
  console.log('isAdmin()');
  return authService.hasPermission('perm');
}
