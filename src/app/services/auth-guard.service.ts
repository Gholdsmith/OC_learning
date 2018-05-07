import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Authservice } from './auth.service';

@Injectable()
export class AuthGard implements CanActivate {

    constructor(private authService: Authservice, private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (this.authService.isAuth) {
            return true;
        } else {
            this.router.navigate(['/auth']);
        }
    }
}
