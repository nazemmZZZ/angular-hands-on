
import { map } from 'rxjs/operators';
import { Token } from './../../store/auth/auth.selectors';
import { select, Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable, of } from 'rxjs';
import{Autoc} from "../models/auto"
@Injectable()
export class AutocompleteDataService extends DefaultDataService<Autoc> {
  constructor(
    private httpClient: HttpClient,
    private urlGenerator: HttpUrlGenerator,
    private store: Store
  ) {
    super('Suggrstion', httpClient, urlGenerator);
  }
  token: string | undefined = '';
  override getAll(): Observable<Autoc[]> {
    const token$ = this.store.pipe(select(Token));

    token$.subscribe((val) => (this.token = val));
    if (this.token) {
      let headder = new HttpHeaders().set(
        'Authorization',
        this.token.toString()
      );
      return this.httpClient
        .get('http://localhost:4444/auto', { headers: headder })
        .pipe(map((res: any) => { return res}));
    }
    return of([{auto:["k"]}])
  }
}
