import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/uesr';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  loggin(user: User) {
    return this.http.post('http://localhost:4444/sigin', user);
  }
  register(user: User) {
    return this.http.post('http://localhost:4444/signup', user);
  }
  authOk() {
    return localStorage.getItem('tocken') !== null;
  }
}
