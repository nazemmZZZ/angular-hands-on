import { logout } from './../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(logout())
    this.router.navigateByUrl('/login')
    console.log('====================================');
    console.log('jjhhh');
    console.log('====================================');
  }
  constructor(private router:Router,private store:Store){}


}
