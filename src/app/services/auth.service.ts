import { isLoggedInBool } from './../store/auth/auth.selectors';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { isLoggedIn } from '../store/auth/auth.selectors';
import { LoginReq } from 'src/navagation';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router, private store:Store) { }
  canActivate(): Observable<boolean>  {
    return this.store.pipe(
      select(isLoggedInBool),
      tap((loggedIn) => {
        console.log('====================================');
        console.log(loggedIn);
        console.log('====================================');
        if (!loggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }

}
