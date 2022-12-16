import { login } from './store/auth/auth.actions';
import { isLoggedIn } from './store/auth/auth.selectors';

import { select, Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginReq, routesToUrl } from 'src/navagation';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hands-on';
  RoutesToUrl = routesToUrl;
  public authStatus$:Observable<LoginReq>=of(LoginReq.NO);
  public logged = LoginReq.NO;
  constructor(public router: Router, private store:Store) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.RoutesToUrl = routesToUrl.filter(
          (route) =>
            route.loginReq == LoginReq.COMMON || route.loginReq == this.logged
        );
        this.RoutesToUrl= this.RoutesToUrl.map((route) =>
          route.url === event.url
            ? { ...route, active: true }
            : { ...route, active: false }
        );
        console.log(this.RoutesToUrl);
      }
    });

  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.store.dispatch(login({user:token}))
    }
    this.authStatus$ = this.store.pipe(select(isLoggedIn))
    this.authStatus$.subscribe((val: LoginReq) => {
      console.log(val)
      this.logged = val;
    });
    console.log(this.router.url);
  }
}
