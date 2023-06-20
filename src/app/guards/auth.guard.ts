import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Promise<true | UrlTree> => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.isAutheniticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      }
    
      return router.parseUrl('/login');
    });
};
